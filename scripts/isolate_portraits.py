import sys
import os

def process_hero():
    # Convert hero_person_tight.png to PAM RGBA
    os.system("convert public/assets/extracted/hero_person_tight.png -alpha set /tmp/hero_in.pam")
    
    with open("/tmp/hero_in.pam", "rb") as f:
        header = b""
        while b"ENDHDR\n" not in header:
            header += f.readline()
        raw_data = f.read()

    # Parse header
    lines = header.decode("latin1").split("\n")
    width = 0
    height = 0
    for line in lines:
        if line.startswith("WIDTH"):
            width = int(line.split()[1])
        elif line.startswith("HEIGHT"):
            height = int(line.split()[1])

    print(f"Hero Image: {width}x{height}")
    pixels = bytearray(raw_data)
    
    # Each pixel is 4 bytes: R, G, B, A
    # The person is centered.
    # In the upper half (y < 250):
    # - The head is roughly x between 80 and 195.
    # - Anything to the left (x < 70) and to the right (x > 205) is background / cream letters.
    # - Specifically, cream letters have high R (> 180), high G (> 160), high B (> 140) and R > B.
    # - Let's inspect and set alpha = 0 for background outside the person.

    out_pixels = bytearray(width * height * 4)

    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            r = pixels[idx]
            g = pixels[idx+1]
            b = pixels[idx+2]
            a = pixels[idx+3]

            # Check if this pixel is cream letter
            # Cream letters: r ~ 234, g ~ 213, b ~ 189
            is_cream = (r > 165 and g > 150 and b > 125 and abs(r - g) < 55 and r > b)

            # Hair/skin/suit detection:
            # Person center is at x ~ 140
            dist_from_center = abs(x - 137)

            keep = True
            
            # Above the shoulders (y < 220):
            # Head width is around 110px, so dist_from_center > 62 is likely background
            if y < 220:
                if dist_from_center > 64 or is_cream:
                    keep = False
                # Top of hair is around y = 15
                if y < 15:
                    keep = False
            elif y < 270:
                # Neck and collar transition
                if (dist_from_center > 95 and y < 240) or is_cream:
                    keep = False
            else:
                # Suit / chest
                if is_cream:
                    keep = False
                # Outside edges of suit at the very sides
                if dist_from_center > 130 and y < 350:
                    keep = False

            if not keep:
                out_pixels[idx] = 0
                out_pixels[idx+1] = 0
                out_pixels[idx+2] = 0
                out_pixels[idx+3] = 0
            else:
                out_pixels[idx] = r
                out_pixels[idx+1] = g
                out_pixels[idx+2] = b
                out_pixels[idx+3] = 255

    # Write out PAM
    out_hdr = f"P7\nWIDTH {width}\nHEIGHT {height}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n".encode("latin1")
    with open("/tmp/hero_out.pam", "wb") as f:
        f.write(out_hdr)
        f.write(out_pixels)

    # Convert back to PNG and smooth edges
    os.system("convert /tmp/hero_out.pam public/assets/extracted/hero_portrait_transparent.png")
    print("Saved hero_portrait_transparent.png")

def process_about():
    # Crop About photo accurately from the original reference
    # Reference image size: 1024x1536
    # About photo: x ~ 100 to 295, y ~ 1095 to 1295
    # Let's crop x=100, y=1095, w=200, h=200
    os.system("convert public/assets/aistudio/0f73bb23-4c36-43bc-bd53-9e23452690df_b245b0c4.png -crop 190x195+115+1095 /tmp/about_in.pam")
    
    with open("/tmp/about_in.pam", "rb") as f:
        header = b""
        while b"ENDHDR\n" not in header:
            header += f.readline()
        raw_data = f.read()

    lines = header.decode("latin1").split("\n")
    width = 0
    height = 0
    for line in lines:
        if line.startswith("WIDTH"):
            width = int(line.split()[1])
        elif line.startswith("HEIGHT"):
            height = int(line.split()[1])

    pixels = bytearray(raw_data)
    out_pixels = bytearray(width * height * 4)

    # In about photo, remove text at left/right edges if any
    for y in range(height):
        for x in range(width):
            idx_in = (y * width + x) * 3
            idx_out = (y * width + x) * 4
            r = pixels[idx_in]
            g = pixels[idx_in+1]
            b = pixels[idx_in+2]

            # Text color check: cream text at x < 15 or x > 175
            is_cream_text = (r > 170 and g > 155 and b > 130 and (x < 18 or x > 172))

            if is_cream_text:
                out_pixels[idx_out] = 0
                out_pixels[idx_out+1] = 0
                out_pixels[idx_out+2] = 0
                out_pixels[idx_out+3] = 0
            else:
                out_pixels[idx_out] = r
                out_pixels[idx_out+1] = g
                out_pixels[idx_out+2] = b
                out_pixels[idx_out+3] = 255

    out_hdr = f"P7\nWIDTH {width}\nHEIGHT {height}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n".encode("latin1")
    with open("/tmp/about_out.pam", "wb") as f:
        f.write(out_hdr)
        f.write(out_pixels)

    os.system("convert /tmp/about_out.pam public/assets/extracted/about_portrait_clean.png")
    print("Saved about_portrait_clean.png")

if __name__ == "__main__":
    process_hero()
    process_about()
