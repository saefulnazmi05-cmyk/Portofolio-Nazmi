import os

def isolate_hero():
    os.system("convert public/assets/extracted/hero_centered.png -alpha set /tmp/hero_c.pam")
    with open("/tmp/hero_c.pam", "rb") as f:
        hdr = b""
        while b"ENDHDR\n" not in hdr:
            hdr += f.readline()
        raw = f.read()

    width = 420
    height = 500
    pixels = bytearray(raw)
    out = bytearray(width * height * 4)

    # Center is at x = 210
    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            r, g, b, a = pixels[idx], pixels[idx+1], pixels[idx+2], pixels[idx+3]

            # Cream letter detection:
            # R: ~234, G: ~213, B: ~189
            is_cream = (r > 160 and g > 145 and b > 120 and abs(r - g) < 55)

            # Red circle background:
            # Dark red: R ~ 60-150, G < 40, B < 40
            # Black space: R < 35, G < 35, B < 35

            dist = abs(x - 210)
            is_person = False

            if y < 35:
                # Top edge above hair
                is_person = False
            elif y < 210:
                # Head area: head width is roughly 160px (dist <= 82)
                # But inside dist <= 82, make sure it's not cream
                if dist <= 78 and not is_cream:
                    is_person = True
            elif y < 250:
                # Neck and chin: dist <= 95
                if dist <= 95 and not is_cream:
                    is_person = True
            elif y < 320:
                # Shoulders spreading out
                # Shoulders slope down from neck: at y=250 dist ~ 100, at y=320 dist ~ 190
                max_d = 100 + (y - 250) * 1.3
                if dist <= max_d and not is_cream:
                    is_person = True
            else:
                # Chest & suit
                if not is_cream:
                    is_person = True

            if is_person:
                out[idx] = r
                out[idx+1] = g
                out[idx+2] = b
                out[idx+3] = 255
            else:
                out[idx] = 0
                out[idx+1] = 0
                out[idx+2] = 0
                out[idx+3] = 0

    hdr_out = f"P7\nWIDTH {width}\nHEIGHT {height}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n".encode("latin1")
    with open("/tmp/hero_clean.pam", "wb") as f:
        f.write(hdr_out)
        f.write(out)

    # Blur mask edges slightly for smooth antialiasing
    os.system("convert /tmp/hero_clean.pam public/assets/extracted/saeful_hero_cutout.png")
    print("Saved saeful_hero_cutout.png")

isolate_hero()
