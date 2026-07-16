import os
from PIL import Image

dir_path = "/Users/anko/Какие-то проекты/shishki-oreshki/public/assets_v4"
for filename in os.listdir(dir_path):
    if filename.endswith(".png"):
        file_path = os.path.join(dir_path, filename)
        try:
            img = Image.open(file_path).convert("L")
            # Create a new RGBA image where RGB is white (or we can just leave it as alpha mask)
            # Actually, the mask image just needs its alpha channel to be the grayscale values.
            # So RGB can be all white, and A is the grayscale.
            rgba = Image.new("RGBA", img.size, (255, 255, 255, 0))
            rgba.putalpha(img)
            rgba.save(file_path)
            print(f"Converted {filename}")
        except Exception as e:
            print(f"Failed {filename}: {e}")
