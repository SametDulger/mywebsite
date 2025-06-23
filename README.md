# MyWebsite

Kişisel portföy ve özgeçmiş sitesi. Modern web teknolojileriyle (Next.js, TypeScript, Tailwind CSS) geliştirilmiş, özelleştirilebilir ve mobil uyumlu bir şablondur.

## Özellikler

- **Next.js** tabanlı SSR/SSG destekli hızlı web sitesi
- **TypeScript** ile tip güvenliği
- **Tailwind CSS** ile modern ve özelleştirilebilir tasarım
- Bölümler: Hakkımda, Özgeçmiş, Portföy, Referanslar, İletişim
- Kolayca güncellenebilir veri dosyaları
- SEO ve sitemap desteği
- Mobil uyumlu ve erişilebilir

## Proje Yapısı

```
mywebsite/
├── public/                # Statik dosyalar (favicon, resimler, manifest)
├── src/
│   ├── components/        # React bileşenleri
│   ├── data/              # Kişisel bilgiler ve içerik (data.tsx)
│   ├── hooks/             # Özel React hook'ları
│   ├── images/            # Profil ve portföy görselleri
│   ├── pages/             # Next.js sayfa ve API route'ları
│   └── styles/            # Global ve özel stiller
├── .vscode/               # VSCode ayarları
├── package.json           # Proje bağımlılıkları ve scriptler
├── tailwind.config.js     # Tailwind ayarları
├── tsconfig.json          # TypeScript ayarları
└── README.md
```

## Kurulum ve Çalıştırma

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/SametDulger/mywebsite.git
   cd mywebsite
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   yarn install
   # veya
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   yarn dev
   # veya
   npm run dev
   ```

4. **Projeyi derleyin ve canlıya alın:**
   ```bash
   yarn build
   yarn start
   # veya
   npm run build
   npm start
   ```

## Kişiselleştirme

- `src/data/data.tsx` dosyasındaki bilgileri (isim, açıklama, portföy, sosyal medya, iletişim vb.) kendi bilgilerinize göre düzenleyin.
- Görselleri `public/` veya `src/images/` klasörüne ekleyin ve data dosyasında referans verin.
- Renkler ve tema için `tailwind.config.js` dosyasını düzenleyebilirsiniz.

## Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/) (isteğe bağlı)
- [ESLint, Prettier, Stylelint] (kod kalitesi için)
