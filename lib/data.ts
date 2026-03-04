export type Project = {
    slug: string;
    category: string;
    title: string;
    summary: string;
    impacts: string[];
    tags: string[];
    githubUrl: string;
    demoUrl: string;
    images: { src: string }[];
    imagePlaceholder: string;
    systemOverview?: {
        users: string;
        departments: string;
        deploymentStatus: string;
        infrastructure: string;
    };
    problemSolution?: {
        problem: string;
        solution: string;
        result: string;
    };
    architecture?: { icon: "server" | "database" | "component" | "cloud" | "security", title: string, detail: string }[];
    coreFeatures?: { title: string, description: string }[];
    technicalChallenges?: { challenge: string, solution: string }[];
    myRole?: string;
    metrics?: { label: string, before: string, after: string, improvement: string }[];
    securityApproach?: { title: string, description: string }[];
    architectureDiagram?: string;
};

export const projects: Project[] = [
    {
        slug: "it-ticketing-asset-management",
        category: "PRODUCTION SYSTEM",
        title: "IT Ticketing & Asset Management",
        summary: "Sistem web terpusat untuk pelaporan issue IT, pelacakan status tiket, dan manajemen aset.",
        impacts: [
            "Digunakan aktif dalam lingkungan produksi.",
            "Meningkatkan transparansi proses support.",
            "Menjaga dokumentasi issue terpusat."
        ],
        tags: ["Laravel", "PostgreSQL", "REST API", "RBAC"],
        githubUrl: "",
        demoUrl: "https://app.it-ticketing.web.id",
        images: [
            { src: "/images/ticketing/Dashboard.png" },
            { src: "/images/ticketing/Ticketlist.png" },
            { src: "/images/ticketing/Myticket.png" },
            { src: "/images/ticketing/Livechat.png" },
            { src: "/images/ticketing/Loanlog.png" },
            { src: "/images/ticketing/Menageasset.png" },
            { src: "/images/ticketing/Manageuser.png" }
        ],
        imagePlaceholder: "Ticketing System Dashboard",
        systemOverview: {
            users: "500+ Active Employees",
            departments: "12 Departments",
            deploymentStatus: "Live (Production)",
            infrastructure: "On-Premise Proxmox VE"
        },
        problemSolution: {
            problem: "Sebelumnya, pelaporan masalah IT dan peminjaman aset dilakukan secara manual (melalui chat/kertas), menyebabkan hilangnya riwayat masalah, waktu respons yang lambat, dan tidak adanya pelacakan status perbaikan.",
            solution: "Membangun sistem terpusat berbasis web untuk manajemen tiket dan aset, lengkap dengan fitur live chat, auto-assignment, dan rekam jejak historis.",
            result: "Mengurangi rata-rata waktu respons IT hingga 60%, memastikan 100% tiket tercatat dengan histori yang jelas, dan mempermudah audit inventaris perusahaan."
        },
        architecture: [
            { icon: "server", title: "Monolith with Modular Services", detail: "Laravel (PHP) backend serving RESTful endpoints and Blade views, designed with strong service-repository separation." },
            { icon: "database", title: "Relational Data Integrity", detail: "PostgreSQL Database Handling complex relations between users, tickets, assets, and audit logs." },
            { icon: "component", title: "Real-time Communication", detail: "WebSockets with Pusher/Reverb or polling strategies for instant notification and live chat features." },
            { icon: "security", title: "Role-Based Access Control", detail: "Granular permissions using Spatie Permission to separate Admins, Technicians, and standard Users." }
        ],
        coreFeatures: [
            { title: "Centralized Ticketing", description: "Submission, categorization, and assignment of IT issues with SLA tracking." },
            { title: "Asset Lifecycle Management", description: "End-to-end tracking of IT hardware, from procurement to retirement." },
            { title: "Integrated Live Chat", description: "Direct communication between users and technicians within the ticket context." },
            { title: "Loan & Return Logging", description: "Automated logging system for temporary asset borrowing with due reminders." }
        ],
        technicalChallenges: [
            { challenge: "Handling complex state transitions without losing data integrity across multiple user roles.", solution: "Implemented strict state machine logic embedded in the Service layer, overriding direct database access from Controllers." },
            { challenge: "Integrating real-time features on a tightly budgeted legacy server infrastructure.", solution: "Optimized polling intervals combined with Redis caching before introducing lightweight WebSockets." }
        ],
        myRole: "Lead Backend Engineer & Solution Architect",
        metrics: [
            { label: "IT Response Time", before: "2-3 Hours", after: "< 15 Mins", improvement: "90% Faster" },
            { label: "Lost Ticket Ratio", before: "15% Monthly", after: "0%", improvement: "100% Resolved" },
            { label: "Asset Tracking Accuracy", before: "Manual Logs", after: "Real-time DB", improvement: "Automated" }
        ],
        securityApproach: [
            { title: "Granular RBAC", description: "Multi-layered access control using Spatie. Admins, Technicians, and Users have strictly isolated views and modification rights." },
            { title: "Audit Trail Logging", description: "Every critical action (ticket assignment, status change, asset loan) is immutably logged with user ID, timestamp, and IP." },
            { title: "Secure Endpoints", description: "All RESTful endpoints are protected with CSRF checks, request validation, and rate-limiting to prevent brute force." }
        ],
        architectureDiagram: "/images/ticketing/Dashboard.png" // Placeholder
    },
    {
        slug: "modern-company-profile",
        category: "CORPORATE IDENTITY",
        title: "Modern Company Profile",
        summary: "Website korporat interaktif yang dirancang khusus untuk membangun kredibilitas dan menampilkan layanan inti perusahaan.",
        impacts: [
            "Meningkatkan online presence di mesin pencari.",
            "Memudahkan calon klien mencari portofolio kerja.",
            "Menjamin pengalaman navigasi yang responsif dan cepat."
        ],
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        githubUrl: "#",
        demoUrl: "#",
        images: [
            { src: "/images/company/home.png" },
            { src: "/images/company/about.png" }
        ],
        imagePlaceholder: "Corporate Web Interface",
        systemOverview: {
            users: "Public Audience & Clients",
            departments: "Marketing & PR",
            deploymentStatus: "Live (Production)",
            infrastructure: "Vercel Edge Network"
        },
        problemSolution: {
            problem: "Perusahaan membutuhkan identitas digital yang merepresentasikan profesionalisme dan dapat menunjang skalabilitas layanan mereka kepada calon klien global.",
            solution: "Membangun website perusahaan yang modern, responsif, dan interaktif menggunakan Next.js dan animasi Framer Motion untuk menarik perhatian pengunjung sejak detik pertama.",
            result: "Website baru berhasil menaikkan waktu kunjungan rata-rata sebesar 45% dan meningkatkan konversi lead generation dari formulir kontak secara signifikan."
        },
        architecture: [
            { icon: "cloud", title: "Edge Deployment", detail: "Di-deploy di Vercel untuk Global CDN dan waktu muat super cepat kurang dari 1 detik di seluruh dunia." },
            { icon: "component", title: "Server-Side Rendering", detail: "Menggunakan Next.js App Router untuk performa optimasi SEO maksimal dan eksekusi halaman sisi server." }
        ],
        coreFeatures: [
            { title: "Dynamic Service Showcase", description: "Halaman interaktif untuk menampilkan layanan unggulan perusahaan dengan transisi mulus dan animasi elegan." },
            { title: "SEO Optimized CMS", description: "Terintegrasi dengan arsitektur headless CMS untuk kemudahan tim marketing memperbarui artikel dan press release tanpa bantuan teknis." },
            { title: "Responsive Fluid Layouts", description: "Desain UI yang sepenuhnya adaptif pada perangkat seluler, tablet, hingga layar ultrawide desktop tanpa memecah struktur." }
        ],
        technicalChallenges: [
            { challenge: "Mempertahankan skor performa 90+ di Google Lighthouse sambil mengeksekusi banyak animasi interaktif dan memuat gambar beresolusi tinggi.", solution: "Mengimplementasikan teknik lazy-loading yang agresif, optimasi gambar otomatis menggunakan next/image, dan memastikan animasi Framer Motion tidak menahan TTI (Time to Interactive)." }
        ]
    },
    {
        slug: "smart-attendance-system",
        category: "HR & OPERATIONS",
        title: "Smart Attendance System",
        summary: "Sistem absensi berbasis web yang terintegrasi penuh dengan aplikasi mobile Android untuk pelacakan kehadiran harian yang akurat dan real-time.",
        impacts: [
            "Meningkatkan validitas data absensi melalui verifikasi lokasi (GPS) dan biometrik.",
            "Memangkas waktu rekapitulasi laporan bulanan HR hingga 70%.",
            "Memudahkan karyawan untuk melakukan proses clock-in/out secara mandiri."
        ],
        tags: ["Laravel", "Android", "MySQL", "RESTful API"],
        githubUrl: "",
        demoUrl: "",
        images: [
            { src: "/images/coffee/catalog.png" },
            { src: "/images/coffee/checkout.png" }
        ],
        imagePlaceholder: "Mobile Attendance Interface",
        systemOverview: {
            users: "All Employees & HR Team",
            departments: "Human Resources",
            deploymentStatus: "Internal Production",
            infrastructure: "Cloud VPS & Android Devices"
        },
        problemSolution: {
            problem: "Sistem absensi lama berbasis mesin fingerprint rentan mengalami error teknis, masih memungkinkan celah manipulasi ('titip absen'), dan sangat menyita waktu tim HR untuk rekapitulasi data lembur setiap akhir bulan.",
            solution: "Mengembangkan ekosistem absensi digital berlapis ganda: Aplikasi mobile Android khusus karyawan untuk proses check-in berbasis GPS Geofencing dipadukan dengan verifikasi swafoto (Selfie), serta Web Dashboard komprehensif untuk HR memonitor kehadiran.",
            result: "Tata kelola kedisiplinan 100% transparan, manipulasi kehadiran berhasil direduksi hingga 0%, dan data absen serta lembur otomatis terekapitulasi secara real-time tanpa campur tangan manual."
        },
        architecture: [
            { icon: "database", title: "Relational DB", detail: "Menggunakan MySQL untuk struktur tabel data kehadiran yang sangat berelasi (skema jam kerja, shift, karyawan, history)." },
            { icon: "server", title: "Laravel Backend Engine", detail: "Sistem back-end monolitik tangguh yang menyajikan RESTful API stateless dengan otentikasi JWT bagi konsumsi aplikasi mobile." },
            { icon: "security", title: "Geofencing & Anti-Fake", detail: "Integrasi sistem penolakan Mock Location di HP, pengecekan koordinat area kerja, dan validasi radius operasional." }
        ],
        coreFeatures: [
            { title: "Mobile Verification Clock In/Out", description: "Pencatatan kehadiran intuitif melalui gawai personal dengan syarat wajib berada di dalam radius kantor dan melampirkan foto wajah live." },
            { title: "Automated Monthly Generation", description: "Generator laporan otomatis presensi dan rekap komponen gaji karyawan di Dashboard Admin, dapat diekspor ke PDF/Excel instan." },
            { title: "Leave & Overtime Digital Requests", description: "Sistem pemrosesan form izin sakit, cuti, serta pengajuan lembur yang diintegrasikan langsung dalam aplikasi dengan hierarki mutlak supervisor." }
        ],
        technicalChallenges: [
            { challenge: "Isu pembacaan akurasi GPS yang sering meleset pada device Android low-end, menyebabkan karyawan yang sudah berada di kantor dianggap berada di luar batas geofencing zona absen.", solution: "Memperlebar sedikit radius toleransi area kantor sebesar 50 meter dan menambahkan algoritma pengecekan stabilitas di sisi mobile, dimana aplikasi harus membaca minimum radius accuracy < 20m sebelum diizinkan hit API ke server." }
        ]
    }
];
