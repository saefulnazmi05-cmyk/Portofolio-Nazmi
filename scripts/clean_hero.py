import os

def clean_hero_portrait():
    os.system("convert public/assets/extracted/hero_centered.png -alpha set /tmp/hero_raw.pam")
    with open("/tmp/hero_raw.pam", "rb") as f:
        hdr = b""
        while b"ENDHDR\n" not in hdr:
            hdr += f.readline()
        raw = f.read()

    width = 420
    height = 500
    pixels = bytearray(raw)
    out = bytearray(width * height * 4)

    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            r, g, b, a = pixels[idx], pixels[idx+1], pixels[idx+2], pixels[idx+3]

            dist = abs(x - 210)
            
            # Smooth shoulder slope
            if y < 38:
                allowed_dist = 0
            elif y < 200:
                allowed_dist = 81
            elif y < 310:
                allowed_dist = 81 + (y - 200) * 1.25
            else:
                allowed_dist = 300

            is_cream = (r > 175 and g > 160 and b > 135 and abs(r - g) < 45)
            is_outside = (dist > allowed_dist) or (dist > 70 and is_cream)

            if is_outside:
                out[idx] = 0
                out[idx+1] = 0
                out[idx+2] = 0
                out[idx+3] = 0
            else:
                out[idx] = r
                out[idx+1] = g
                out[idx+2] = b
                out[idx+3] = 255

    hdr_out = f"P7\nWIDTH {width}\nHEIGHT {height}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n".encode("latin1")
    with open("/tmp/hero_clean6.pam", "wb") as f:
        f.write(hdr_out)
        f.write(out)

    os.system("convert /tmp/hero_clean6.pam public/assets/extracted/saeful_hero_clean.png")
    print("Saved saeful_hero_clean.png")

clean_hero_portrait()
