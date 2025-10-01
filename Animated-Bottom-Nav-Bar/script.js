/**
 * Vị trí `left` của slider tương ứng với từng icon
 * - `default`: áp dụng cho mobile và tablet
 * - `lg`: áp dụng cho màn hình desktop (width ≥ 1024px)
 */
const positions = {
    default: ['11.5%', '37%', '62.75%', '88.5%'],   // mobile + tablet
    lg:      ['14.5%', '38%', '61.5%', '85.25%']    // desktop
};

const slider = document.querySelector('.slider'); // phần tử slider bo tròn di chuyển
const icons = document.querySelectorAll('.icon'); // tất cả các icon SVG trong thanh nav
let activeIndex = 0; // chỉ số icon hiện đang được chọn

/**
 * Cập nhật trạng thái thanh điều hướng:
 * - Di chuyển slider về vị trí tương ứng
 * - Cập nhật style cho icon được chọn
 *
 * @param {number} index - Vị trí của icon được chọn (0 → 3)
 */
function setActive(index) {
    const screenWidth = window.innerWidth;
    // Lấy mảng vị trí phù hợp với kích thước màn hình hiện tại
    const positionSet = screenWidth >= 1024 ? positions.lg : positions.default;

    // Bỏ class "đang active" khỏi tất cả icon
    icons.forEach((icon, i) => {
        icon.classList.remove('mb-8', 'md:mb-12', 'lg:mb-15', 'text-[#fffdff]');
        icon.classList.add('mb-0', 'text-[#c3c6cc]');
    });

    // Thêm class "active" cho icon được chọn
    const activeIcon = icons[index];
    activeIcon.classList.remove('mb-0', 'text-[#c3c6cc]');
    activeIcon.classList.add('mb-8', 'md:mb-12', 'lg:mb-15', 'text-[#fffdff]');

    // Cập nhật vị trí slider
    slider.style.left = positionSet[index];

    // Lưu trạng thái hiện tại
    activeIndex = index;
}

/**
 * Gán sự kiện click cho mỗi icon:
 * Khi click thì gọi setActive để cập nhật slider và icon
 */
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        setActive(index);
    });
});

/**
 * Gán sự kiện resize:
 * Khi người dùng thay đổi kích thước màn hình,
 * slider sẽ được căn lại theo layout phù hợp (mobile/tablet/desktop)
 */
window.addEventListener('resize', () => {
    setActive(activeIndex); // ✅ Reapply đúng slider và icon
});

/**
 * Khi trang load xong, set icon đầu tiên làm mặc định
 */
window.addEventListener('load', () => {
    setActive(0); // ✅ Icon đầu tiên active
});