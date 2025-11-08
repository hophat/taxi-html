# Website Taxi Lagi Bình Thuận

Website giới thiệu dịch vụ taxi tại Bình Thuận, được tối ưu SEO để khách hàng dễ dàng tìm kiếm và liên hệ.

## Tính năng

- **Landing Page đơn giản**: Thiết kế chuyên nghiệp với hero section, thông tin dịch vụ và liên hệ
- **Responsive Design**: Tương thích với desktop, tablet và mobile
- **SEO tối ưu**: Meta tags, heading tags với từ khóa "taxi Bình Thuận", "hotline taxi Bình Thuận"
- **AMP Support**: Tối ưu cho mobile search engines với phiên bản AMP
- **Liên hệ dễ dàng**: Hotline điện thoại và Zalo
- **Dễ dàng tùy chỉnh**: Config file để thay đổi thông tin liên hệ cho quảng cáo

## Cấu trúc file

```
/Users/macbookpro/Gulagi/sotaxi/taxilagi/
├── index.html          # Trang chủ chính (regular version)
├── index.amp.html      # Trang AMP cho mobile SEO
├── styles.css          # CSS styling
├── script.js           # JavaScript cho tương tác
├── config.js           # File cấu hình (thay đổi thông tin liên hệ)
└── README.md           # Hướng dẫn này
```

## Cách chạy website

### 1. Chạy local server (development)

```bash
# Sử dụng Python HTTP server
python3 -m http.server 8000

# Hoặc sử dụng Node.js http-server
npx http-server -p 8000
```

Truy cập: `http://localhost:8000`

### 2. Deploy lên hosting

Upload tất cả files lên hosting của bạn (Vercel, Netlify, Firebase, etc.)

### 3. Deploy với AMP support (Khuyến nghị)

Website này hỗ trợ cả phiên bản thông thường và AMP để tối ưu SEO trên mobile.

#### Sử dụng script deploy AMP chuyên dụng:

```bash
# Deploy cả regular và AMP versions
./deploy-amp.sh

# Hoặc với tùy chọn
./deploy-amp.sh --skip-build  # Bỏ qua build step
./deploy-amp.sh --clean       # Clean build trước khi build
```

#### Sử dụng script deploy thông thường (vẫn hoạt động):

```bash
# Deploy với script cũ
./deploy.sh
```

### URLs sau khi deploy:

- **Trang chính**: `https://taxilagi.io.vn/`
- **Phiên bản AMP**: `https://taxilagi.io.vn/index.amp.html`

### AMP Features:

- ✅ Tự động phát hiện AMP trên search engines
- ✅ Canonical links đúng chuẩn
- ✅ AMP Analytics tích hợp
- ✅ Mobile-first design
- ✅ Load nhanh trên mobile

## Tùy chỉnh thông tin liên hệ

Để thay đổi số hotline/Zalo cho quảng cáo khác, chỉ cần sửa file `config.js`:

```javascript
const taxiConfig = {
    contact: {
        phone: '0989511431',     // Thay số hotline mới
        zaloId: '0989511431',    // Thay ID Zalo mới
    },
    // ... các cấu hình khác
};
```

Website sẽ tự động cập nhật tất cả số liên hệ trên trang.

## Từ khóa SEO

Website được tối ưu cho các từ khóa:
- taxi bình thuận
- hotline taxi bình thuận
- số taxi bình thuận
- taxi lagi bình thuận
- taxi binh thuan
- đặt taxi bình thuận

## Hình ảnh

Hero section sử dụng hình ảnh từ: https://ik.imagekit.io/tvlk/blog/2024/07/taxi-dak-lak-3.jpg

## Liên hệ

- Hotline: 0989511431
- Zalo: 0989511431
- Khu vực: Bình Thuận và lân cận

## License

Dự án này được tạo cho mục đích thương mại. Vui lòng liên hệ để được hỗ trợ tùy chỉnh thêm.