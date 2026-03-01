# Sen Çok Özelsin 💕

Ortadaki fotoğrafa tıklayınca iltifat mesajları ve konfeti çıkan tek sayfalık web sitesi.

## Nasıl kullanılır?

1. **Kendi fotoğrafını koy:** Proje klasörüne `photo.jpg` adında bir fotoğraf ekle (veya `index.html` içinde `src="photo.jpg"` kısmını kendi dosya adına çevir).
2. **Yerel olarak aç:** `index.html` dosyasına çift tıkla veya tarayıcıda aç.

## GitHub ile herkese aç (GitHub Pages)

Site GitHub URL’i ile yayınlanacak: **`https://KULLANICI_ADIN.github.io/REPO_ADI/`**

### Adımlar

1. Bu klasörü yeni bir GitHub reposuna yükle:
   - [github.com/new](https://github.com/new) → Repo adı örn. `ozel-site` (veya istediğin isim)
   - "Create repository" sonrası sayfadaki komutları kullan veya GitHub Desktop ile projeyi ekle

2. GitHub Pages’i aç:
   - Repo sayfasında **Settings** → soldan **Pages**
   - **Source:** "Deploy from a branch" seç
   - **Branch:** `main` (veya `master`), klasör: **/ (root)** → **Save**

3. Birkaç dakika bekle; site şu adreste canlı olur:
   ```
   https://KULLANICI_ADIN.github.io/ozel-site/
   ```
   (KULLANICI_ADIN = GitHub kullanıcı adın, ozel-site = repo adın)

4. Fotoğrafı eklediysen (`photo.jpg`) commit’leyip push’la; sayfa otomatik güncellenir.

## Dosyalar

- `index.html` — Ana sayfa
- `styles.css` — Stiller
- `script.js` — Tıklama, iltifatlar, konfeti
- `photo.jpg` — Ortada görünecek fotoğraf (sen ekleyeceksin)
