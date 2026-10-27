 src="https://cdn.tailwindcss.com"
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'night-bg': '#020617',
                        'night-deep': '#001630',
                        'silver-light': '#f8fafc',
                        'silver-mid': '#e2e8f0',
                        'silver-dark': '#cbd5e1',
                        'tech-blue': '#1e3a8a',
                        'glow-blue': '#3b82f6',
                    },
                    fontFamily: {
                        cinzel: ['Cinzel', 'serif'],
                        roboto: ['Roboto', 'sans-serif'],
                    }
                }
            }
        }

                // Crear destellos sutiles de fondo aleatorios
        const background = document.getElementById('tech-background');
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'silver-sparkle';
            const size = Math.random() * 3 + 1;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.opacity = Math.random() * 0.4 + 0.1;
            sparkle.style.animation = `pulseGlow ${Math.random() * 4 + 3}s infinite ease-in-out ${Math.random() * 2}s`;
            background.appendChild(sparkle);
        }