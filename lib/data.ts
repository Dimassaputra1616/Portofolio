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
        images: [],
        imagePlaceholder: "Corporate Web Interface",
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
        images: [],
        imagePlaceholder: "Coffee Shop Showcase",
    }
];
