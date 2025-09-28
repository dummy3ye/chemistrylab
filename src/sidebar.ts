const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menu-button');
const resizer = document.getElementById('resizer');
const body = document.body;

if (sidebar && menuButton && resizer) {
    body.style.marginLeft = getComputedStyle(sidebar).width;

    // Add title
    const title = document.createElement('h1');
    title.textContent = 'Periodic Table';
    sidebar.appendChild(title);

    // Toggle sidebar
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
        if (sidebar.classList.contains('sidebar-hidden')) {
            body.style.marginLeft = '0';
        } else {
            body.style.marginLeft = getComputedStyle(sidebar).width;
        }
        window.dispatchEvent(new Event('resize'));
    });

    // Resize sidebar
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.removeEventListener('mousemove', handleMouseMove);
            window.dispatchEvent(new Event('resize'));
        });
    });

    function handleMouseMove(e) {
        if (!isResizing) return;
        const newWidth = e.clientX;
        if (newWidth > 100 && newWidth < 500) { // Min and max width
            sidebar.style.width = newWidth + 'px';
            body.style.marginLeft = newWidth + 'px';
        }
    }
}