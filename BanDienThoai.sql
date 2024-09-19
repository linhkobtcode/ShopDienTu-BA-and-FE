CREATE DATABASE Cuahangdienthoai;
USE Cuahangdienthoai;

CREATE TABLE Slide (
    MaSlide INT AUTO_INCREMENT PRIMARY KEY,
    Anh VARCHAR(50)
);

CREATE TABLE GioiThieu (
    MaGioiThieu INT AUTO_INCREMENT PRIMARY KEY,
    TieuDe VARCHAR(50),
    NoiDung TEXT NOT NULL,
    HinhAnh TEXT
);

CREATE TABLE LienHe (
    MaLienHe INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(30),
    DiaChi VARCHAR(50),
    SoDienThoai VARCHAR(15)
);

CREATE TABLE Menu (
    MaMenu INT AUTO_INCREMENT PRIMARY KEY,
    TenMenu VARCHAR(30),
    Link VARCHAR(20)
);

CREATE TABLE LoaiSanPham (
    MaLoaiSanPham INT AUTO_INCREMENT PRIMARY KEY,
    TenLoaiSanPham VARCHAR(35) NOT NULL,
    GioiThieu TEXT
);

CREATE TABLE SanPham (
    MaSanPham INT AUTO_INCREMENT PRIMARY KEY,
    TenSP TEXT,
    MoTa TEXT,
    NgayTao DATETIME,
    MaLoaiSanPham INT,
    AnhDaiDien TEXT,
    SoLuong INT,
    DonGia INT,
    FOREIGN KEY (MaLoaiSanPham) REFERENCES LoaiSanPham(MaLoaiSanPham) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE NguoiDung (
    MaNguoiDung INT AUTO_INCREMENT PRIMARY KEY,
    TaiKhoan VARCHAR(35),
    MatKhau VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    HoTen VARCHAR(50) NOT NULL,
    NgaySinh DATETIME,
    DiaChi VARCHAR(50),
    SoDienThoai VARCHAR(15),
    GioiTinh VARCHAR(10),
    AnhDaiDien TEXT,
    VaiTro VARCHAR(30)
);

CREATE TABLE DonHang (
    MaDonHang INT AUTO_INCREMENT PRIMARY KEY,
    NgayDat DATETIME,
    NgayGiao DATETIME,
    HoTen VARCHAR(50),
    DiaChi VARCHAR(50),
    SoDienThoai VARCHAR(15),
    MaNguoiDung INT,
    TrangThai INT,
    FOREIGN KEY (MaNguoiDung) REFERENCES NguoiDung(MaNguoiDung) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE ChiTietDonHang (
    MaChiTiet INT AUTO_INCREMENT PRIMARY KEY,
    MaDonHang INT,
    MaSanPham INT,
    SoLuong INT,
    GiaTien INT,
    FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO GioiThieu (TieuDe, NoiDung, HinhAnh) 
VALUES 
('TỔNG QUAN VỀ CÔNG TY', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ''),
('', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 'anh-gioi-thieu.jpg'),
('', 'Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', '');

INSERT INTO LienHe (Email, DiaChi, SoDienThoai) 
VALUES 
('Mark@gmail.com', '180 Nguyễn Thị Duệ, phường Thanh Bình tp.Hải Dương', '012345678');

INSERT INTO Menu (TenMenu, Link) 
VALUES 
('TRANG CHỦ', '/'), 
('SẢN PHẨM', '/sanpham'), 
('GIỚI THIỆU', '/gioithieu'), 
('LIÊN HỆ', '/lienhe');

INSERT INTO Slide (Anh) 
VALUES 
('slider1.jpg'), 
('slider2.jpg'), 
('slider3.jpg'), 
('slider4.jpg');

INSERT INTO LoaiSanPham (TenLoaiSanPham, GioiThieu) 
VALUES 
('Bánh Lạnh Mouse', 'Savor ra mắt bộ sưu tập bánh mousse ngọt mềm, thơm lừng vị hoa quả/cà phê. Bánh sử dụng nguyên liệu xịn xò, 100% kem tươi whipping nhập khẩu và hoa quả tươi, phù hợp với những người sành ăn nhất'), 
('Bánh Savor', 'Mời bạn xem ngay hơn 100 mẫu bánh kem, bánh sinh nhật tươi ngon, đa dạng, giá chỉ từ 120k'), 
('Bánh Bơ', 'Cốt vani và kem bơ, trang trí thêm hoa quả tươi mát gồm xoài và việt quất trên mặt bánh, xem kẽ các bông kem bơ béo ngậy, thơm ngon.');

INSERT INTO SanPham (TenSP, MoTa, NgayTao, MaLoaiSanPham, AnhDaiDien, SoLuong, DonGia) 
VALUES 
('Bánh Bông Lan Trứng Muối Xoài', 'Bánh mousse mang đậm hương vị xoài ngọt mát dễ chịu, kem tươi whipping cream kết hợp cùng sữa chua cốt vani, trang trí thêm xoài trên mặt bánh để thêm đậm vị cùng socola', '2024-05-01', 2, 'banh-bong-lan-trung-muoi-xoai.jpg', 40, 220000), 
('Bánh kem black forest father day', 'Bánh kem "khu rừng đen", sự kết hợp hương vị hòa quyện tuyệt vời của cốt bánh socola cùng với vị chua nhẹ của mứt cherry, trang trí thêm socola và mứt cherry', '2024-05-02', 2, 'banh-kem-black-forest-father-day.jpg', 40, 180000), 
('Bánh kem Xoài Việt Quất', 'Cốt vani và kem bơ, trang trí thêm hoa quả tươi mát gồm xoài và việt quất trên mặt bánh, xem kẽ các bông kem bơ béo ngậy, thơm ngon', '2024-05-03', 3, 'banh-kem-bo-xoai-viet-quat.jpg', 40, 150000), 
('Bánh Kem Mixed Berries', 'Cốt vani, nhân mứt việt quất. Lớp phủ kem vị việt quất, trang trí với việt quất, dâu tây và lá hương thảo', '2024-05-03', 1, 'banh-kem-mixed-berries.jpg', 40, 150000), 
('Bánh Kem Triple Choco', 'Bánh 3 lần vị socola: cốt bánh socola, kem tươi vị socola, trang trí socola chip và socola sệt.', '2024-05-04', 1, 'banh-kem-triple-choco', 40, 150000), 
('Bánh kem Xoài Việt Quất', 'Một set 9 cốc chia đều 3 vị: dâu tây, xoài và sữa chua, kết hợp cùng cốt bánh vani, bên trên trang trí hoa quả tươi: dâu, xoài, nho xanh. Thích hợp các buổi tiệc vừa, đáp ứng khẩu vị khác nhau của các thành viên.', '2024-05-05', 3, 'set-mousse-hoa-qua.jpg', 40, 220000), 
('Quạt điện đứng Senko Model - L1638', 'Quạt điện đứng Senko Model - L1638 với thiết kế hiện đại và tính năng vận hành êm ái. Với động cơ mạnh mẽ, quạt này mang lại luồng không khí mạnh mẽ và thoải mái cho không gian sống của bạn. Hãy tận hưởng cảm giác mát lạnh trong những ngày hè nóng bức.', '2020-12-04', 1, 'sp4.jpg', 40, 500000);

INSERT INTO NguoiDung (TaiKhoan, MatKhau, Email, HoTen, NgaySinh, DiaChi, SoDienThoai, GioiTinh, AnhDaiDien, VaiTro) 
VALUES 
('Admin', '123456789', 'mark@gmail.com', 'Admin', '2003-07-16', '180 Nguyễn Thị Duệ, Hải Dương', '012345678', 'Nam', 'admin.jpg', 'Admin');



DELIMITER //

CREATE PROCEDURE sp_lay_san_pham_moi()
BEGIN
    SELECT * 
    FROM SanPham 
    ORDER BY NgayTao DESC 
    LIMIT 5;
END //
DELIMITER ; 
CALL sp_lay_san_pham_moi();

DELIMITER //
CREATE PROCEDURE sp_lay_san_pham_ban_chay()
BEGIN
    SELECT 
        sp.MaSanPham, 
        sp.TenSP, 
        sp.AnhDaiDien, 
        sp.DonGia, 
        SUM(ct.SoLuong) AS TongSoLuong 
    FROM ChiTietDonHang ct 
    JOIN DonHang dh ON ct.MaDonHang = dh.MaDonHang
    JOIN SanPham sp ON ct.MaSanPham = sp.MaSanPham 
    WHERE DATEDIFF(NOW(), dh.NgayDat) <= 30 
    GROUP BY sp.MaSanPham
    ORDER BY TongSoLuong DESC 
    LIMIT 5;
END //
DELIMITER ;

call sp_lay_san_pham_ban_chay()

DELIMITER //
CREATE PROCEDURE sp_getall_SanPham() 
BEGIN 
    SELECT * 
    FROM SanPham; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getbyid_SanPham(IN p_MaSanPham INT) 
BEGIN 
    SELECT * 
    FROM SanPham 
    WHERE MaSanPham = p_MaSanPham; 
END //
DELIMITER ;
drop procedure sp_getbyid_SanPham
DELIMITER //
CREATE PROCEDURE sp_search_SanPham(IN TenSP VARCHAR(50)) 
BEGIN 
    SELECT * 
    FROM SanPham 
    WHERE TenSP LIKE CONCAT('%', TenSP, '%'); 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_SanPham(
    IN TenSP TEXT, 
    IN MoTa TEXT, 
    IN NgayTao DATETIME, 
    IN MaLoaiSanPham INT, 
    IN AnhDaiDien TEXT, 
    IN SoLuong INT, 
    IN DonGia INT
) 
BEGIN 
    INSERT INTO SanPham (TenSP, MoTa, NgayTao, MaLoaiSanPham, AnhDaiDien, SoLuong, DonGia) 
    VALUES (TenSP, MoTa, NgayTao, MaLoaiSanPham, AnhDaiDien, SoLuong, DonGia); 
END //
DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_update_SanPham(
    IN p_MaSanPham INT, 
    IN p_TenSP TEXT, 
    IN p_MoTa TEXT, 
    IN p_NgayTao DATETIME, 
    IN p_MaLoaiSanPham INT, 
    IN p_AnhDaiDien TEXT, 
    IN p_SoLuong INT, 
    IN p_DonGia INT
) 
BEGIN 
    UPDATE SanPham 
    SET TenSP = p_TenSP, 
        MoTa = p_MoTa, 
        NgayTao = p_NgayTao, 
        MaLoaiSanPham = p_MaLoaiSanPham, 
        AnhDaiDien = p_AnhDaiDien, 
        SoLuong = p_SoLuong, 
        DonGia = p_DonGia 
    WHERE MaSanPham = p_MaSanPham; 
END //

DELIMITER ;

drop procedure sp_update_SanPham;
SET SQL_SAFE_UPDATES = 0;
SET SQL_SAFE_UPDATES = 1;

CALL sp_update_SanPham(15, 'Tên sản phẩm mới 1 ','Mô tả sản phẩm mới 1', '2024-08-13 12:00:00', 2, 'anh-moi.jpg', 200, 60000 
);
DELIMITER //
CREATE PROCEDURE sp_delete_SanPham(IN p_MaSanPham INT) 
BEGIN 
    DELETE FROM SanPham 
    WHERE MaSanPham = p_MaSanPham; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getall_Menu() 
BEGIN 
    SELECT * 
    FROM Menu; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_Menu(
    IN p_TenMenu VARCHAR(30), 
    IN p_Link VARCHAR(20)
) 
BEGIN 
    INSERT INTO Menu (TenMenu, Link) 
    VALUES (p_TenMenu, p_Link); 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_update_Menu(
    IN p_MaMenu INT, 
    IN p_TenMenu VARCHAR(30), 
    IN p_Link VARCHAR(20)
) 
BEGIN 
    UPDATE Menu 
    SET TenMenu = p_TenMenu, 
        Link = p_Link 
    WHERE MaMenu = p_MaMenu; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_delete_Menu(IN p_MaMenu INT) 
BEGIN 
    DELETE FROM Menu 
    WHERE MaMenu = p_MaMenu; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getall_LoaiSanPham() 
BEGIN 
    SELECT * 
    FROM LoaiSanPham; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_LoaiSanPham(
    IN p_TenLoaiSanPham VARCHAR(35), 
    IN p_GioiThieu TEXT
) 
BEGIN 
    INSERT INTO LoaiSanPham (TenLoaiSanPham, GioiThieu) 
    VALUES (p_TenLoaiSanPham, p_GioiThieu); 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_update_LoaiSanPham(
    IN p_MaLoaiSanPham INT, 
    IN p_TenLoaiSanPham VARCHAR(35), 
    IN p_GioiThieu TEXT
) 
BEGIN 
    UPDATE LoaiSanPham 
    SET TenLoaiSanPham = p_TenLoaiSanPham, 
        GioiThieu = p_GioiThieu 
    WHERE MaLoaiSanPham = p_MaLoaiSanPham; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_delete_LoaiSanPham(IN p_MaLoaiSanPham INT) 
BEGIN 
    DELETE FROM LoaiSanPham 
    WHERE MaLoaiSanPham = p_MaLoaiSanPham; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getall_GioiThieu() 
BEGIN 
    SELECT * 
    FROM GioiThieu; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_GioiThieu(
    IN p_TieuDe VARCHAR(50), 
    IN p_NoiDung TEXT, 
    IN p_HinhAnh TEXT
) 
BEGIN 
    INSERT INTO GioiThieu (TieuDe, NoiDung, HinhAnh) 
    VALUES (p_TieuDe, p_NoiDung, p_HinhAnh); 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_update_GioiThieu(
    IN p_MaGioiThieu INT, 
    IN p_TieuDe VARCHAR(50), 
    IN p_NoiDung TEXT, 
    IN p_HinhAnh TEXT
) 
BEGIN 
    UPDATE GioiThieu 
    SET TieuDe = p_TieuDe, 
        NoiDung = p_NoiDung, 
        HinhAnh = p_HinhAnh 
    WHERE MaGioiThieu = p_MaGioiThieu; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_delete_GioiThieu(IN p_MaGioiThieu INT) 
BEGIN 
    DELETE FROM GioiThieu 
    WHERE MaGioiThieu = p_MaGioiThieu; 
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_getall_NguoiDung() 
BEGIN 
    SELECT * 
    FROM NguoiDung; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getbyid_NguoiDung(IN p_MaNguoiDung INT) 
BEGIN 
    SELECT * 
    FROM NguoiDung 
    WHERE MaNguoiDung = p_MaNguoiDung; 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_NguoiDung(
    IN p_TaiKhoan VARCHAR(35), 
    IN p_MatKhau VARCHAR(50), 
    IN p_Email VARCHAR(50), 
    IN p_HoTen VARCHAR(50), 
    IN p_NgaySinh DATETIME, 
    IN p_DiaChi VARCHAR(50), 
    IN p_SoDienThoai VARCHAR(15), 
    IN p_GioiTinh VARCHAR(10), 
    IN p_AnhDaiDien TEXT, 
    IN p_VaiTro VARCHAR(30)
) 
BEGIN 
    INSERT INTO NguoiDung (TaiKhoan, MatKhau, Email, HoTen, NgaySinh, DiaChi, SoDienThoai, GioiTinh, AnhDaiDien, VaiTro) 
    VALUES (p_TaiKhoan, p_MatKhau, p_Email, p_HoTen, p_NgaySinh, p_DiaChi, p_SoDienThoai, p_GioiTinh, p_AnhDaiDien, p_VaiTro); 
END //
DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_update_NguoiDung(
    IN p_MaNguoiDung INT,
    IN p_MatKhau TEXT,
    IN p_Email VARCHAR(50),
    IN p_HoTen VARCHAR(50),
    IN p_NgaySinh DATE,
    IN p_GioiTinh VARCHAR(10),
    IN p_DiaChi VARCHAR(35),
    IN p_SoDienThoai VARCHAR(15),
    IN p_AnhDaiDien TEXT,
    IN p_VaiTro VARCHAR(25)
)
BEGIN
    UPDATE nguoidung 
    SET
        MatKhau = COALESCE(p_MatKhau, MatKhau),
        Email = COALESCE(p_Email, Email),
        HoTen = COALESCE(p_HoTen, HoTen),
        NgaySinh = COALESCE(p_NgaySinh, NgaySinh),
        GioiTinh = COALESCE(p_GioiTinh, GioiTinh),
        DiaChi = COALESCE(p_DiaChi, DiaChi),
        SoDienThoai = COALESCE(p_SoDienThoai, SoDienThoai),
        AnhDaiDien = COALESCE(p_AnhDaiDien, AnhDaiDien),
        VaiTro = COALESCE(p_VaiTro, VaiTro)
    WHERE MaNguoiDung = p_MaNguoiDung;
END //
DELIMITER ;
-- Stored Procedure to delete user
DELIMITER //
CREATE PROCEDURE sp_delete_NguoiDung(
    IN p_MaNguoiDung INT
)
BEGIN
    DELETE FROM nguoidung 
    WHERE MaNguoiDung = p_MaNguoiDung;
END //
DELIMITER ;
-- Stored Procedure to login user
DELIMITER //
CREATE PROCEDURE sp_dangnhap_NguoiDung(
    IN p_TaiKhoan VARCHAR(100),
    IN p_MatKhau VARCHAR(255)
)
BEGIN
    SELECT * FROM NguoiDung 
    WHERE TaiKhoan = p_TaiKhoan AND MatKhau = p_MatKhau;
END //
DELIMITER ;
-- Stored Procedure to create an order

DELIMITER //
CREATE PROCEDURE sp_create_donhang(
     IN p_HoTen VARCHAR(50),
     IN p_DiaChi VARCHAR(50),
     IN p_SoDienThoai VARCHAR(15),
     IN p_MaNguoiDung INT,
     IN p_TrangThai INT,
     IN p_NgayGiao DATETIME,
     IN p_list_json_chitiet_hoadon JSON
)
BEGIN
    DECLARE p_hoadon_id INT;
    DECLARE product_id INT;
    DECLARE quantity INT;
    DECLARE price DECIMAL(10,2);
    DECLARE product_count INT;
    DECLARE i INT DEFAULT 0;

    -- Chèn thông tin đơn hàng
    INSERT INTO DonHang(NgayDat, NgayGiao, HoTen, DiaChi, SoDienThoai, MaNguoiDung, TrangThai)
    VALUES (NOW(), p_NgayGiao, p_HoTen, p_DiaChi, p_SoDienThoai, p_MaNguoiDung, p_TrangThai);
    
    SET p_hoadon_id = LAST_INSERT_ID();

    -- Lấy số lượng các mục trong mảng JSON
    SET product_count = JSON_LENGTH(p_list_json_chitiet_hoadon);

    -- Bắt đầu giao dịch
    START TRANSACTION;

    -- Lặp qua mảng JSON và chèn từng mục
    WHILE i < product_count DO
        SET product_id = JSON_UNQUOTE(JSON_EXTRACT(p_list_json_chitiet_hoadon, CONCAT('$[', i, '].maSanPham')));
        SET quantity = JSON_UNQUOTE(JSON_EXTRACT(p_list_json_chitiet_hoadon, CONCAT('$[', i, '].soLuong')));
        SET price = JSON_UNQUOTE(JSON_EXTRACT(p_list_json_chitiet_hoadon, CONCAT('$[', i, '].giaTien')));

        INSERT INTO ChiTietDonHang(MaDonHang, MaSanPham, SoLuong, GiaTien)
        VALUES (p_hoadon_id, product_id, quantity, price);

        -- Cập nhật số lượng sản phẩm
        UPDATE SanPham
        SET SoLuong = SoLuong - quantity
        WHERE MaSanPham = product_id;

        SET i = i + 1;
    END WHILE;

    COMMIT;
END //
DELIMITER ;
-- Stored Procedure to create contact
DELIMITER //
CREATE PROCEDURE sp_create_LienHe(
    IN p_Email VARCHAR(25),
    IN p_DiaChi VARCHAR(30),
    IN p_SoDienThoai VARCHAR(15)
)
BEGIN
    INSERT INTO LienHe (Email, DiaChi, SoDienThoai)
    VALUES (p_Email, p_DiaChi, p_SoDienThoai);
END //
DELIMITER ;
-- Stored Procedure to update contact
DELIMITER //
CREATE PROCEDURE sp_update_LienHe(
    IN p_MaLienHe INT,
    IN p_Email VARCHAR(25),
    IN p_DiaChi TEXT,
    IN p_SoDienThoai VARCHAR(15)
)
BEGIN
    UPDATE LienHe
    SET
        Email = COALESCE(p_Email, Email),
        DiaChi = COALESCE(p_DiaChi, DiaChi),
        SoDienThoai = COALESCE(p_SoDienThoai, SoDienThoai)
    WHERE MaLienHe = p_MaLienHe;
END //
DELIMITER ;
-- Stored Procedure to delete contact
DELIMITER //
CREATE PROCEDURE sp_delete_LienHe(
    IN p_MaLienHe INT
)
BEGIN
    DELETE FROM LienHe
    WHERE MaLienHe = p_MaLienHe;
END //
DELIMITER ;
-- Stored Procedure to get all contacts
DELIMITER //
CREATE PROCEDURE sp_getall_LienHe()
BEGIN
    SELECT * FROM LienHe;
END //
DELIMITER ;
-- Stored Procedure to get all slides

DELIMITER //
CREATE PROCEDURE sp_getall_Slide()
BEGIN
    SELECT * FROM Slide;
END //
DELIMITER ;

