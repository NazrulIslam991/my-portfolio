// Data for Experience Section
const experienceData = {
    junior: { title: "Junior Flutter Developer", company: "@ Softvence Delta, Dhaka", duration: "APR 2026 — PRESENT", points: ["Architecting scalable mobile apps using <strong class='text-slate-200'>MVVM Architecture</strong> and Riverpod.", "Integrating complex <strong class='text-slate-200'>REST APIs</strong> via Dio.", "Translating Figma designs into pixel-perfect Flutter widgets.", "Managing real-time backend with <strong class='text-slate-200'>Firebase</strong>."], tags: ["Flutter/Dart", "Clean Architecture", "REST APIs", "Firebase SDK", "Git"] },
    trainee: { title: "Trainee Flutter Developer", company: "@ Softvence Delta, Dhaka", duration: "JAN 2026 — MAR 2026", points: ["Intensive training on <strong class='text-slate-200'>Dart & Flutter</strong> fundamentals.", "Assisted debugging and optimizing client projects.", "Implemented UI components from design specs.", "Learned <strong class='text-slate-200'>Agile/Scrum</strong> workflows."], tags: ["Dart", "Flutter Basics", "UI Development", "Debugging"] },
    bsc: { title: "B.Sc. in Computer Science & Engineering", company: "@ Leading University, Sylhet", duration: "2022 — 2025", points: ["CGPA: 3.69, out of 4.00.", "Developed <strong class='text-slate-200'>Bikretaa apps</strong> as final year project.", "Active in programming club & hackathons.", "Mastered OOP, Data Structures, DBMS."], tags: ["C/C++", "Java", "SQL", "Software Engineering"] }
};

// Data for About Section
const aboutData = {
    bio: {
        title: "I'm Md. Nazrul Islam Nayon",
        subtitle: "Mobile Application Developer",
        desc: "A passionate Flutter Developer from Dhaka, Bangladesh, focused on building elegant, scalable, and high-performance mobile apps by combining clean code practices with efficient state management. My goal is to deliver digital solutions that are easy to use and built to last.",
        details: [
            { icon: "fa-calendar-alt", label: "Date of Birth", value: "01 January, 2002" },
            { icon: "fa-user", label: "Age", value: "24 Years" },
            { icon: "fa-flag", label: "Nationality", value: "Bangladeshi" },
            { icon: "fa-map-marker-alt", label: "Location", value: "Banasree, Rampura, Dhaka" },
            { icon: "fa-envelope", label: "Email", value: "nazrulislamnayon991@gmail.com" },
            { icon: "fa-language", label: "Languages", value: "Bangla (Native), English" }
        ]
    },
    edu: {
        title: "Academic Journey",
        subtitle: "Education Timeline",
        desc: "Focused on building a solid foundation through my studies and always looking for ways to grow my skills.",
        details: [
            { icon: "fa-graduation-cap", label: "B.Sc. in Computer Science & Engineering", institution: "Leading University, Sylhet", result: "CGPA 3.69" },
            { icon: "fa-microscope", label: "Higher Secondary Certificate (HSC)", institution: "BAF Shaheen College, Shamshernagar (Science)", result: "GPA 5.00" },
            { icon: "fa-book", label: "Secondary School Certificate (SSC)", institution: "Deena-nath Institution Satkapon Govt. High School (Science)", result: "GPA 5.00" }
        ]
    },
    skills: {
        title: "Tech Stack & Ecosystem",
        subtitle: "Performance & Scalability",
        desc: "Leveraging Clean Architecture and high-performance libraries to transform complex requirements into robust, production-ready solutions.",
        categories: [
            {
                label: "Mobile & Languages",
                value: "Flutter, Dart, Native Android (Java/Kotlin), Cross-Platform Development, Responsive UI"
            },
            {
                label: "Architecture & State",
                value: "MVVM, Repository Pattern, OOP, Riverpod, GetX"
            },
            {
                label: "API & Backend",
                value: "RESTful APIs (Dio), JSON Parsing, JWT, Firebase (FCM), Socket.io, Cloudinary"
            },
            {
                label: "Features & Integration",
                value: "Google Maps, Stripe Payment, Real-time Tracking, OCR, Localization, Caching"
            },
            {
                label: "Tools & Platforms",
                value: "Git/GitHub, Postman, FVM, Android Studio, VS Code, SharedPreferences"
            }
        ]
    },
    cert: {
        title: "Professional Certifications",
        subtitle: "Verified Credentials",
        desc: "Professional accreditation in advanced mobile development and architectural patterns.",
        details: [
            {
                title: "App Development with Flutter",
                provider: "Ostad",
                credentialId: "C35483",
                description: "Certified in advanced state management (Riverpod), clean architecture, and enterprise-grade API orchestration.",
                tags: ["CLEAN ARCHITECTURE", "GETX", "FLUTTER"],
                validateLink: "https://drive.google.com/file/d/1RBx1BggH6bNYfx8oLt9y-rD0nsx3okaC/view?usp=sharing"
            }
        ]
    }
};

// Typewriter Configuration
const roles = ["Junior Flutter Developer"];
let roleIndex = 0, charIndex = 0;
const typedElement = document.getElementById("typed-text");

function typeWriter() {
    if (!typedElement) return;
    if (charIndex < roles[roleIndex].length) {
        typedElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 90);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeWriter, 500);
    }
}

// Experience Update Logic
window.updateExperience = function (key) {
    const data = experienceData[key];
    const container = document.getElementById('experience-content');
    if (!container) return;

    document.querySelectorAll('.exp-nav-item').forEach(el => {
        el.classList.remove('bg-white/5', 'border-emerald-500', 'scale-[1.02]');
        el.classList.add('bg-white/[0.02]', 'border-transparent');
        const title = el.querySelector('h4');
        if (title) {
            title.classList.remove('text-white');
            title.classList.add('text-slate-400');
        }
    });

    const activeNav = document.getElementById(`nav-${key}`);
    if (activeNav) {
        activeNav.classList.add('bg-white/5', 'border-emerald-500', 'scale-[1.02]');
        activeNav.classList.remove('bg-white/[0.02]', 'border-transparent');
        const title = activeNav.querySelector('h4');
        if (title) title.classList.add('text-white');
    }

    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
        let pointsHTML = data.points.map(p => `
            <li class="flex gap-3 group/item">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 group-hover/item:scale-150 transition-transform"></span>
                <p class="text-slate-400 text-sm sm:text-base leading-relaxed">${p}</p>
            </li>`).join('');

        let tagsHTML = data.tags.map(t => `
            <span class="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] sm:text-xs text-slate-300 hover:border-emerald-500/50 transition-colors cursor-default">${t}</span>`).join('');

        container.innerHTML = `
            <div class="mb-8 opacity-100">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 class="text-xl sm:text-2xl font-bold text-white">${data.title}</h3>
                    <span class="text-[10px] sm:text-xs font-bold mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full self-start">${data.duration}</span>
                </div>
                <p class="text-emerald-400 font-medium text-sm sm:text-base">${data.company}</p>
            </div>
            <ul class="space-y-4 mb-8">${pointsHTML}</ul>
            <div class="mt-auto pt-6 border-t border-white/5">
                <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-3 mono">Technologies Used</p>
                <div class="flex flex-wrap gap-2">${tagsHTML}</div>
            </div>`;
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 250);
};

// About Update Logic
window.updateAbout = function (key) {
    const data = aboutData[key];
    const display = document.getElementById('about-display-content');
    if (!display) return;

    document.querySelectorAll('.about-nav-btn').forEach(btn => {
        btn.classList.remove('active', 'border-emerald-500/50', 'bg-white/5');
        const iconDiv = btn.querySelector('div');
        iconDiv.classList.replace('bg-emerald-500/10', 'bg-slate-500/10');
        iconDiv.classList.replace('text-emerald-500', 'text-slate-400');
        const titleText = btn.querySelector('.font-bold');
        titleText.classList.replace('text-white', 'text-slate-400');
    });

    const activeBtn = document.getElementById(`btn-${key}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'border-emerald-500/50', 'bg-white/5');
        const iconDiv = activeBtn.querySelector('div');
        iconDiv.classList.replace('bg-slate-500/10', 'bg-emerald-500/10');
        iconDiv.classList.replace('text-slate-400', 'text-emerald-500');
        const titleText = activeBtn.querySelector('.font-bold');
        titleText.classList.replace('text-slate-400', 'text-white');
    }

    display.style.opacity = '0';
    setTimeout(() => {
        let contentHTML = `
            <span class="text-emerald-500 mono text-[10px] sm:text-xs font-bold uppercase block mb-2">${data.subtitle}</span>
            <h3 class="text-2xl sm:text-3xl font-black text-white mb-4">${data.title}</h3>
            <p class="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">${data.desc}</p>
        `;

        // 1. Skills Category Logic
        if (data.categories) {
            contentHTML += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6">`;
            const iconMap = { "Languages": "fa-code", "Mobile Development": "fa-mobile-alt", "Backend/DB": "fa-database", "State Management": "fa-layer-group", "Collaboration & Tools": "fa-tools" };
            data.categories.forEach(cat => {
                const icon = iconMap[cat.label] || "fa-terminal";
                contentHTML += `
                <div class="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                            <i class="fas ${icon} text-lg"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-sm tracking-wide group-hover:text-emerald-400">${cat.label}</h4>
                            <p class="text-slate-400 text-xs leading-relaxed font-medium">${cat.value}</p>
                        </div>
                    </div>
                </div>`;
            });
            contentHTML += `</div>`;
        }

        // 2. Details (Bio & Edu) Logic - key !== 'cert' যোগ করা হয়েছে undefined সমস্যা দূর করতে
        if (data.details && key !== 'cert') {
            const isEdu = key === 'edu';
            contentHTML += `<div class="grid ${isEdu ? 'grid-cols-1' : 'sm:grid-cols-2'} gap-4 border-t border-white/5 pt-6">`;
            data.details.forEach(item => {
                contentHTML += `
                <div class="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 group">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-500 block uppercase font-bold">${item.label}</span>
                            <span class="text-slate-200 text-xs sm:text-sm font-medium group-hover:text-white">${isEdu ? item.institution : item.value}</span>
                        </div>
                    </div>
                    ${isEdu ? `<div class="ml-4 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold group-hover:bg-emerald-500 group-hover:text-black">${item.result}</div>` : ''}
                </div>`;
            });
            contentHTML += `</div>`;
        }

        // 3. Special Certification Logic
        if (key === 'cert') {
            contentHTML += `<div class="space-y-6 border-t border-white/5 pt-6">`;
            data.details.forEach(cert => {
                contentHTML += `
                <div class="glass-card p-6 sm:p-8 rounded-[2rem] bg-[#0f172a]/40 border border-white/5 relative overflow-hidden group">
                    <div class="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                    <div class="relative z-10">
                        <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div class="w-14 h-14 rounded-2xl bg-[#020617] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                                <i class="fas fa-award text-2xl"></i>
                            </div>
                            <div class="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <span class="text-[10px] mono text-slate-400 tracking-widest uppercase">Credential ID: ${cert.credentialId}</span>
                            </div>
                        </div>
                        <h4 class="text-2xl sm:text-3xl font-black text-white mb-3">${cert.title}</h4>
                        <p class="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">Professional accreditation from **${cert.provider}**. ${cert.description}</p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            ${cert.tags.map(tag => `<span class="px-3 py-1 text-[10px] font-bold mono border border-white/10 rounded-md text-slate-300 bg-white/5">${tag}</span>`).join('')}
                        </div>
                        <a href="${cert.validateLink}" target="_blank" class="inline-flex items-center gap-3 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-300 transition-colors group/link">
                            Validate Credentials
                            <div class="h-[1px] w-8 bg-emerald-500/40 group-hover/link:w-12 transition-all"></div>
                            <i class="fas fa-external-link-alt text-[10px]"></i>
                        </a>
                    </div>
                </div>`;
            });
            contentHTML += `</div>`;
        }
        display.innerHTML = contentHTML;
        display.style.opacity = '1';
    }, 250);
};

// Scroll and Nav Observers
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    document.querySelectorAll('.scroll-animate').forEach(el => scrollObserver.observe(el));
    updateAbout('bio');
    updateExperience('junior');

    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({ top: targetSection.offsetTop - 80, behavior: 'smooth' });
                }
            }
            navLinks.forEach(l => l.classList.remove('text-purple-400', 'active'));
            this.classList.add('text-purple-400', 'active');
            document.getElementById('mobileMenu')?.classList.add('hidden');
        });
    });

    const scrollNavObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('text-purple-400', link.getAttribute('href') === `#${id}`);
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.5, rootMargin: "-80px 0px -20% 0px" });

    sections.forEach(section => scrollNavObserver.observe(section));

    document.getElementById('menuBtn')?.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
        const icon = document.querySelector('#menuBtn i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});