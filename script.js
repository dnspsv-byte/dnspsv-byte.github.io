/* ==========================================================================
   MTerminal Commercial Presentation Landing Page Script (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Interactive Theme Switcher ---
    const themeButtons = document.querySelectorAll('.theme-btn');
    const themeImgPreview = document.getElementById('theme-img-preview');
    const themeTitle = document.getElementById('theme-title');
    const themeDesc = document.getElementById('theme-desc');
    const specBg = document.getElementById('spec-bg');
    const specFg = document.getElementById('spec-fg');

    const themesData = {
        green: {
            title: 'Classic Green (Verde Fósforo)',
            desc: 'Inspirado nos monitores e displays industriais clássicos dos anos 80/90. Oferece o maior contraste visual em ambientes altamente iluminados.',
            img: 'imagens/tela_tema_verde.jpg',
            bg: '#1A3C1A (Verde Escuro)',
            fg: '#39FF14 (Neon Green)'
        },
        amber: {
            title: 'Amber Gold (Âmbar Vintage)',
            desc: 'Iluminação tom âmbar de alta elegância. Excelente para redução de fadiga ocular em ambientes de penumbra, como restaurantes a luz de velas, bares e boates.',
            img: 'imagens/tela_tema_ambar.jpg',
            bg: '#3C2A1A (Âmbar Escuro)',
            fg: '#FFB000 (Glowing Gold)'
        },
        blue: {
            title: 'Cyber Blue (Azul Cyan High-Tech)',
            desc: 'Estilo futurista e moderno com iluminação azul cyan. Perfeito para estabelecimentos de atmosfera jovem, hamburguerias e lanchonetes modernas.',
            img: 'imagens/tela_tema_azul.jpg',
            bg: '#0A2A3C (Azul Escuro)',
            fg: '#00E5FF (Electric Cyan)'
        }
    };

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const themeKey = button.getAttribute('data-theme');
            const data = themesData[themeKey];

            if (data) {
                // Active Button class
                themeButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');

                // Smooth Image Fade
                themeImgPreview.style.opacity = '0.3';
                setTimeout(() => {
                    themeImgPreview.src = data.img;
                    themeTitle.textContent = data.title;
                    themeDesc.textContent = data.desc;
                    specBg.textContent = data.bg;
                    specFg.textContent = data.fg;
                    themeImgPreview.style.opacity = '1';
                }, 150);
            }
        });
    });

    // --- 2. FAQ Accordion Toggle ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle clicked
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});
