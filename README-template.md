# Hướng Dẫn Tùy Chỉnh Website Taxi

## 📝 Tổng Quan
Website này được thiết kế để dễ dàng tùy chỉnh thông tin cho các dịch vụ taxi khác nhau. Tất cả thông tin quan trọng đều được tập trung trong file `config.js`.

## 🔧 Cấu Trúc File

### `config.js` - File cấu hình chính
Chứa tất cả thông tin có thể tùy chỉnh:

```javascript
const taxiConfig = {
    company: {
        name: 'Taxi Lagi Bình Thuận',           // Tên công ty
        website: 'https://taxilagi.io.vn/',     // URL website
        address: '105 Lê Minh Công, Phước Lộc, La Gi, Lâm Đồng',
        city: 'La Gi',
        province: 'Bình Thuận',
        country: 'Việt Nam',
        lat: 10.674,                           // Tọa độ GPS
        lng: 107.073,
        phoneDisplay: '+84-989-511-431'         // Số điện thoại định dạng
    },

    contact: {
        phone: '0989511431',                    // Số điện thoại gốc
        zaloId: '0989511431',                   // ID Zalo (có thể khác số điện thoại)
    },

    seo: {
        keywords: ['taxi lagi bình thuận', ...], // Từ khóa SEO
        title: 'Taxi Lagi Bình Thuận - Hotline 0989511431 | Đặt Taxi Lagi Bình Thuận',
        description: 'Mô tả SEO...'
    },

    services: [                                // Danh sách dịch vụ
        {
            name: 'Taxi 4 Chỗ',
            description: 'Phục vụ di chuyển cá nhân...'
        }
    ],

    serviceArea: 'Lagi, Bình Thuận và các khu vực lân cận',

    theme: {                                   // Màu sắc theme
        primary: '#ff6b35',
        secondary: '#f7931e',
        accent: '#ffe66d',
        success: '#28a745',
        info: '#0066cc'
    }
};
```

## 🚀 Cách Tùy Chỉnh

### Bước 1: Chỉnh sửa `config.js`
1. Mở file `config.js`
2. Thay đổi thông tin theo nhu cầu:
   - Tên công ty
   - Số điện thoại
   - Địa chỉ
   - Từ khóa SEO
   - Màu sắc theme

### Bước 2: Cập nhật hình ảnh (tùy chọn)
- `logo_taxi_lagi.png` - Logo công ty
- `banner-lagi.jpg` - Banner chính
- `banner01.jpg`, `banner02.webp` - Slide trong hero section

### Bước 3: Deploy website
```bash
./deploy-lagi.sh
```

## 📱 Template System

Website sử dụng template system với placeholders `<%= config.xxx %>`:

### Ví dụ trong HTML:
```html
<title><%= config.seo.title %></title>
<meta name="description" content="<%= config.seo.description %>">
```

### Ví dụ trong JavaScript:
```javascript
// Template processor sẽ tự động thay thế
const phone = config.contact.phone;
const companyName = config.company.name;
```

## 🎨 Tùy Chỉnh Giao Diện

### Thay đổi màu sắc:
Trong `config.js`, chỉnh `theme` object:

```javascript
theme: {
    primary: '#your-color',     // Màu chính
    secondary: '#your-color',   // Màu phụ
    accent: '#your-color',      // Màu nhấn
    success: '#your-color',     // Màu thành công
    info: '#your-color'         // Màu thông tin
}
```

### Thay đổi font chữ:
Trong `styles.css`, tìm phần font-family và thay đổi.

### Thêm/xóa sections:
- Tìm section trong `index.html`
- Sao chép cấu trúc HTML
- Thay đổi nội dung theo `config.js`

## 🔍 SEO Optimization

### Từ khóa chính:
- Tên địa phương: "taxi [địa phương]"
- Dịch vụ: "taxi sân bay", "taxi nội thành"
- Hotline: "hotline taxi [địa phương]"

### Cấu trúc URL:
- Canonical: `https://[domain]/`
- AMP: `https://[domain]/index.amp.html`

## 📊 Analytics & Tracking

### Google Analytics:
Trong `index.html`, tìm GA4 ID và thay đổi:
```javascript
gtag('config', 'G-YOUR-GA4-ID');
```

### AMP Analytics:
Trong `index.amp.html`, thay đổi GA ID nếu cần.

## 🌟 Các Tính Năng

### ✅ Đã implement:
- AMP version cho mobile SEO
- Responsive design
- Schema.org structured data
- Google Analytics 4
- Floating action buttons
- Hero slider
- Contact forms
- Map integration

### 🔄 Template system:
- Tự động thay thế thông tin từ config
- Dễ dàng clone cho khách hàng mới
- Không cần chỉnh sửa HTML trực tiếp

## 🚨 Lưu Ý Quan Trọng

1. **Backup config.js** trước khi thay đổi
2. **Test trên local** trước khi deploy
3. **Kiểm tra AMP validation** sau khi thay đổi
4. **Cập nhật sitemap** khi thay đổi URL

## 📞 Hỗ Trợ

Nếu cần hỗ trợ tùy chỉnh:
- Thay đổi số hotline: Chỉnh `config.contact.phone`
- Thay đổi địa chỉ: Chỉnh `config.company.address`
- Thay đổi tên: Chỉnh `config.company.name`

Website sẽ tự động cập nhật tất cả thông tin!