document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Bỏ active khỏi tất cả
            menuItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.icon-box').classList.remove('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]', 'shadow-[0_0_50px_15px_rgba(234,90,178,0.5)]');
                i.querySelector('.icon-box').classList.add('bg-[#261c51]', 'text-[#554884]');
                i.querySelector('.label').classList.remove('text-[#fbf6fd]');
                i.querySelector('.label').classList.add('text-[#554884]');
            });

            // Active cho item được click
            item.classList.add('active');
            const iconBox = item.querySelector('.icon-box');
            const label = item.querySelector('.label');

            iconBox.classList.remove('bg-[#261c51]', 'text-[#554884]');
            iconBox.classList.add('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]', 'shadow-[0_0_50px_15px_rgba(234,90,178,0.5)]');

            label.classList.remove('text-[#554884]');
            label.classList.add('text-[#fbf6fd]');
        });
    });

    const orderItem = document.querySelector('.order-item');
    const historyItem = document.querySelector('.history-item');

    orderItem.addEventListener('click', () => {
        // --- Active Order ---
        const orderIconBlock = orderItem.querySelector('.icon-block');
        const orderLabel = orderItem.querySelector('.order-label');
        const orderDots = orderItem.querySelectorAll('.order-dot1, .order-dot2');

        // Đổi màu icon-block
        orderIconBlock.classList.remove('bg-[#251b55]', 'text-[#554884]');
        orderIconBlock.classList.add('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]');

        // Đổi màu label
        orderLabel?.classList.replace('text-[#554884]', 'text-[#fbf6fd]');

        // Đổi màu các dot
        orderDots.forEach(dot => {
            dot.classList.remove('border', 'shadow-[0_0_20px_5px_rgba(244,82,201,0.5)]', 'shadow-[0_0_20px_5px_rgba(244,82,201,0.25)]');
            dot.classList.add('border-none', 'shadow-none', 'bg-[#fbf6fd]');
            dot.classList.remove('bg-[#f452c9]', 'bg-[#932d71]');
        });

        // --- Xoay icon order ---
        const orderArrowIcon = orderItem.querySelector('.ri-arrow-up-s-line');
        orderArrowIcon.classList.add('rotate-180', 'transition-transform', 'duration-300');

        // --- Reset icon history (xoay về bình thường) ---
        const historyArrowIcon = historyItem.querySelector('.ri-arrow-up-s-line');
        historyArrowIcon.classList.remove('rotate-180');

        // --- Reset History ---
        const historyIconBlock = historyItem.querySelector('.icon-block');
        const historyLabel = historyItem.querySelector('.history-label');
        const historyDots = historyItem.querySelectorAll('.history-dot1, .history-dot2');

        historyIconBlock.classList.remove('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]');
        historyIconBlock.classList.add('bg-[#251b55]', 'text-[#554884]');

        historyLabel?.classList.replace('text-[#fbf6fd]', 'text-[#554884]');

        historyDots.forEach(dot => {
            dot.classList.remove('bg-[#fbf6fd]', 'border-none', 'shadow-none');
            dot.classList.add('border');
            if (dot.classList.contains('history-dot1')) {
                dot.classList.add('bg-[#858fe1]', 'shadow-[0_0_20px_5px_rgba(132,143,225,0.5)]');
            } else {
                dot.classList.add('bg-[#505a9c]', 'shadow-[0_0_20px_5px_rgba(133,143,225,0.25)]');
            }
        });
    });

    historyItem.addEventListener('click', () => {
        // --- Active History ---
        const historyIconBlock = historyItem.querySelector('.icon-block');
        const historyLabel = historyItem.querySelector('.history-label');
        const historyDots = historyItem.querySelectorAll('.history-dot1, .history-dot2');

        historyIconBlock.classList.remove('bg-[#251b55]', 'text-[#554884]');
        historyIconBlock.classList.add('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]');

        historyLabel?.classList.replace('text-[#554884]', 'text-[#fbf6fd]');

        historyDots.forEach(dot => {
            dot.classList.remove('border', 'shadow-[0_0_20px_5px_rgba(132,143,225,0.5)]', 'shadow-[0_0_20px_5px_rgba(133,143,225,0.25)]');
            dot.classList.add('border-none', 'shadow-none', 'bg-[#fbf6fd]');
            dot.classList.remove('bg-[#858fe1]', 'bg-[#505a9c]');
        });

        // --- Xoay icon history ---
        const historyArrowIcon = historyItem.querySelector('.ri-arrow-up-s-line');
        historyArrowIcon.classList.add('rotate-180', 'transition-transform', 'duration-300');

        // --- Reset icon order (xoay về bình thường) ---
        const orderArrowIcon = orderItem.querySelector('.ri-arrow-up-s-line');
        orderArrowIcon.classList.remove('rotate-180');


        // --- Reset Order ---
        const orderIconBlock = orderItem.querySelector('.icon-block');
        const orderLabel = orderItem.querySelector('.order-label');
        const orderDots = orderItem.querySelectorAll('.order-dot1, .order-dot2');

        orderIconBlock.classList.remove('bg-gradient-to-b', 'from-[#df42c8]', 'to-[#f067a8]', 'text-[#fbf6fd]');
        orderIconBlock.classList.add('bg-[#251b55]', 'text-[#554884]');

        orderLabel?.classList.replace('text-[#fbf6fd]', 'text-[#554884]');


        orderDots.forEach(dot => {
            dot.classList.remove('bg-[#fbf6fd]', 'border-none', 'shadow-none');
            dot.classList.add('border');
            if (dot.classList.contains('order-dot1')) {
                dot.classList.add('bg-[#f452c9]', 'shadow-[0_0_20px_5px_rgba(244,82,201,0.5)]');
            } else {
                dot.classList.add('bg-[#932d71]', 'shadow-[0_0_20px_5px_rgba(244,82,201,0.25)]');
            }
        });
    });
});