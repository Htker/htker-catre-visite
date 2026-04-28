        window.addEventListener('load', () => {
            document.querySelector('.card').classList.add('show');
        });

        setInterval(() => {
            const blob1 = document.querySelector('.blob1');
            blob1.style.top = (Math.random() * 200 - 120) + 'px';
            blob1.style.right = (Math.random() * 200 - 100) + 'px';

            const blob2 = document.querySelector('.blob2');
            blob2.style.bottom = (Math.random() * 200 - 80) + 'px';
            blob2.style.left = (Math.random() * 200 - 60) + 'px';
        }, 5000);

        const logo = document.querySelector('.logo-image');
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            logo.style.transform = `translate(${x}px, ${y}px)`;
        });