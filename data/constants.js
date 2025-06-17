// data/constants.js

const LANGUAGES = {
    KO: 'ko',
    EN: 'en'
};

const LOCALIZED_STRINGS = {
    [LANGUAGES.KO]: {
        navbar: {
            home: "홍길동",
            sections: ["소개", "학력", "경력", "프로젝트", "기술", "연구", "수상/자격증"]
        },
        summary: {
            title: "핵심 요약",
            tagline: "풀스택 웹 개발자 | 소프트웨어 엔지니어",
            contact: {
                email: "gildong.hong@example.com",
                phone: "010-1234-5678",
                location: "서울특별시"
            },
            keywords: ["JavaScript", "React", "Node.js", "Python", "SQL", "Cloud", "Agile", "DevOps"],
            qualifications: "정보처리기사, TOEIC 950",
            externalLinks: {
                github: "GitHub",
                linkedin: "LinkedIn",
                blog: "개인 블로그"
            },
            ctaButton: "CONTACT ME"
        },
        contents: {
            sections: {
                intro: {
                    title: "소개",
                    selfIntroduction: {
                        subtitle: "자기소개",
                        text: `안녕하세요, 풀스택 웹 개발자 홍길동입니다. 저는 사용자에게 최고의 경험을 제공하는 직관적이고 효율적인 웹 애플리케이션을 구축하는 데 열정을 가지고 있습니다. 컴퓨터공학 학사 및 소프트웨어공학 석사 학위를 통해 탄탄한 이론적 기반을 다졌으며, 약 7년간 다양한 규모의 프로젝트를 성공적으로 수행하며 프론트엔드와 백엔드 개발 역량을 고루 성장시켰습니다. 특히 React.js와 Node.js 기반의 서비스 개발에 능숙하며, AWS와 Docker를 활용한 클라우드 환경 구축 및 운영 경험이 풍부합니다. 새로운 기술을 학습하고 적용하는 것을 즐기며, 동료들과의 협업을 통해 시너지를 창출하는 데 강점이 있습니다. 복잡한 문제를 해결하고, 지속적으로 개선하며 성장하는 것을 목표로 하고 있습니다.`
                    },
                    goals: {
                        subtitle: "목표",
                        text: `저는 변화하는 웹 기술 트렌드를 주도하고, 사용자 중심의 혁신적인 서비스를 개발하는 데 기여하고자 합니다. 특히 인공지능 및 데이터 분석 기술을 웹 서비스에 접목하여 새로운 가치를 창출하는 것에 큰 관심을 가지고 있습니다. 장기적으로는 아키텍처 설계 역량을 강화하여 대규모 시스템을 안정적으로 운영하고 확장할 수 있는 전문가로 성장하고 싶습니다. 또한, 팀원들과의 적극적인 지식 공유를 통해 서로 발전하고, 긍정적인 개발 문화를 형성하는 데 기여하며 함께 성공적인 프로젝트를 만들어나가고 싶습니다.`
                    }
                },
                education: {
                    title: "학력",
                    items: [
                        {
                            degree: "소프트웨어공학 석사",
                            institution: "한성대학교",
                            period: "2020.03 - 2022.02",
                            description: "인공지능 기반 소프트웨어 개발 연구"
                        },
                        {
                            degree: "컴퓨터공학 학사",
                            institution: "한성대학교",
                            period: "2013.03 - 2017.02",
                            description: "데이터베이스 시스템, 운영체제, 알고리즘 등 전공 심화"
                        }
                    ]
                },
                experience: {
                    title: "경력",
                    items: [
                        {
                            position: "선임 소프트웨어 엔지니어",
                            company: "ABC Tech (주)",
                            period: "2022.03 - 현재",
                            duties: [
                                "클라우드 기반 SaaS 플랫폼 백엔드 API 설계 및 개발 (Node.js, Express, PostgreSQL, AWS)",
                                "대용량 트래픽 처리를 위한 아키텍처 개선 및 성능 최적화",
                                "CI/CD 파이프라인 구축 및 운영 (Jenkins, Docker, Kubernetes)",
                                "프론트엔드 팀과의 협업을 통한 RESTful API 연동 및 기능 구현 지원"
                            ],
                            projects: [
                                { name: "차세대 SaaS 플랫폼 개발", description: "대규모 사용자 대상의 B2B SaaS 플랫폼 신규 개발" },
                                { name: "데이터 분석 시스템 구축", description: "사용자 행동 데이터 분석 및 시각화 시스템 개발" }
                            ]
                        },
                        {
                            position: "소프트웨어 개발자",
                            company: "XYZ Solutions",
                            period: "2017.03 - 2022.02",
                            duties: [
                                "반응형 웹 서비스 프론트엔드 개발 (React.js, Redux, SCSS)",
                                "백오피스 시스템 기능 개발 및 유지보수 (Java, Spring Boot, MySQL)",
                                "기존 시스템 코드 리팩토링 및 테스트 코드 작성",
                                "애자일 개발 방법론을 통한 스프린트 참여 및 기여"
                            ],
                            projects: [
                                { name: "온라인 쇼핑몰 리뉴얼", description: "사용자 편의성 강화를 위한 쇼핑몰 UI/UX 개편" },
                                { name: "사내 ERP 시스템 개선", description: "회계 및 재고 관리 모듈 기능 확장" }
                            ]
                        }
                    ]
                },
                projects: {
                    title: "프로젝트",
                    items: [
                        {
                            id: 1,
                            name: "AI 기반 추천 시스템 개발",
                            description: "사용자 행동 데이터를 기반으로 개인화된 콘텐츠를 추천하는 시스템 개발.",
                            technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
                            period: "2024.01 - 2024.06",
                            link: "https://github.com/gildong-hong/ai-recommender",
                            image: "https://via.placeholder.com/300x200?text=AI+Recommender+System",
                            detail: {
                                objective: "사용자 만족도 향상 및 플랫폼 체류 시간 증대를 위한 AI 기반 추천 시스템 구축.",
                                contribution: "백엔드 API 개발 및 머신러닝 모델 배포 담당. 데이터 전처리 파이프라인 구축 및 최적화.",
                                result: "추천 정확도 15% 향상, 사용자 클릭률 10% 증가."
                            }
                        },
                        {
                            id: 2,
                            name: "실시간 채팅 웹 애플리케이션",
                            description: "WebSocket을 이용한 실시간 다자간 채팅 애플리케이션 개발.",
                            technologies: ["Node.js", "Socket.IO", "React", "Express"],
                            period: "2023.09 - 2023.12",
                            link: "https://github.com/gildong-hong/realtime-chat-app",
                            image: "https://via.placeholder.com/300x200?text=Realtime+Chat+App",
                            detail: {
                                objective: "실시간 커뮤니케이션 기능을 갖춘 웹 애플리케이션 구현.",
                                contribution: "프론트엔드(React) UI 개발 및 백엔드(Node.js, Socket.IO) 실시간 통신 로직 구현.",
                                result: "동시 접속자 100명 테스트 성공, 지연 없는 메시지 전송 확인."
                            }
                        },
                        {
                            id: 3,
                            name: "클라우드 기반 파일 공유 서비스",
                            description: "AWS S3를 활용한 파일 업로드/다운로드 및 공유 서비스.",
                            technologies: ["Java", "Spring Boot", "AWS S3", "React"],
                            period: "2023.03 - 2023.08",
                            link: "https://github.com/gildong-hong/cloud-file-share",
                            image: "https://via.placeholder.com/300x200?text=Cloud+File+Share",
                            detail: {
                                objective: "안정적이고 확장 가능한 클라우드 기반 파일 공유 서비스 구축.",
                                contribution: "Spring Boot 기반 REST API 개발 및 AWS S3 연동, 파일 암호화 기능 구현.",
                                result: "대용량 파일 업로드/다운로드 안정성 확보, 사용자 인증 및 권한 관리 시스템 구축."
                            }
                        },
                        {
                            id: 4,
                            name: "반응형 포트폴리오 웹사이트",
                            description: "개인 포트폴리오를 위한 반응형 웹사이트 디자인 및 개발.",
                            technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
                            period: "2022.11 - 2022.12",
                            link: "https://github.com/gildong-hong/responsive-portfolio",
                            image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
                            detail: {
                                objective: "다양한 디바이스에서 최적화된 사용자 경험을 제공하는 개인 포트폴리오 사이트 제작.",
                                contribution: "UI/UX 설계, 반응형 디자인 구현, JavaScript를 이용한 동적 효과 추가.",
                                result: "데스크톱, 태블릿, 모바일 환경에서 일관된 레이아웃 및 성능 확보."
                            }
                        },
                        {
                            id: 5,
                            name: "블록체인 기반 투표 시스템",
                            description: "이더리움 블록체인을 활용한 투명하고 안전한 투표 시스템.",
                            technologies: ["Solidity", "Truffle", "Ganache", "React"],
                            period: "2022.05 - 2022.09",
                            link: "https://github.com/gildong-hong/blockchain-voting",
                            image: "https://via.placeholder.com/300x200?text=Blockchain+Voting",
                            detail: {
                                objective: "블록체인 기술을 이용한 투표 시스템의 투명성 및 보안성 검증.",
                                contribution: "스마트 컨트랙트(Solidity) 개발 및 테스트, React 기반 프론트엔드 dApp 구현.",
                                result: "위변조 불가능한 투표 결과 기록, 투표 과정의 투명성 확보."
                            }
                        },
                        {
                            id: 6,
                            name: "머신러닝 기반 이미지 분류 앱",
                            description: "사전 학습된 모델을 활용하여 이미지를 분류하는 웹 애플리케이션.",
                            technologies: ["Python", "Django", "TensorFlow.js", "Vue.js"],
                            period: "2021.08 - 2022.01",
                            link: "https://github.com/gildong-hong/ml-image-classifier",
                            image: "https://via.placeholder.com/300x200?text=Image+Classifier",
                            detail: {
                                objective: "머신러닝 모델을 웹에서 쉽게 사용할 수 있도록 하는 애플리케이션 개발.",
                                contribution: "Django 백엔드에서 이미지 처리 및 모델 연동, Vue.js 프론트엔드 개발.",
                                result: "사용자 이미지 업로드 시 실시간으로 분류 결과 제공, 모델 업데이트 용이성 확보."
                            }
                        },
                        {
                            id: 7,
                            name: "레스토랑 예약 관리 시스템",
                            description: "실시간 예약 현황 확인 및 테이블 관리 기능을 제공하는 시스템.",
                            technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
                            period: "2020.10 - 2021.03",
                            link: "https://github.com/gildong-hong/restaurant-reservation",
                            image: "https://via.placeholder.com/300x200?text=Reservation+System",
                            detail: {
                                objective: "레스토랑 운영 효율성 증대를 위한 예약 관리 시스템 구축.",
                                contribution: "Laravel 기반 백엔드 API 개발 및 데이터베이스 설계, 프론트엔드 예약 폼 구현.",
                                result: "예약 충돌 방지 기능 구현, 관리자 페이지를 통한 예약 현황 실시간 파악."
                            }
                        },
                        {
                            id: 8,
                            name: "영화 정보 검색 웹사이트",
                            description: "TMDB API를 활용한 영화 정보 검색 및 인기 영화 목록 제공.",
                            technologies: ["React", "Redux", "Axios", "CSS Modules"],
                            period: "2020.04 - 2020.07",
                            link: "https://github.com/gildong-hong/movie-search-app",
                            image: "https://via.placeholder.com/300x200?text=Movie+Search+App",
                            detail: {
                                objective: "사용자가 쉽게 영화 정보를 검색하고 탐색할 수 있는 웹사이트 개발.",
                                contribution: "React 컴포넌트 기반 UI 개발, Redux를 이용한 상태 관리, TMDB API 연동.",
                                result: "빠른 검색 속도 및 직관적인 사용자 인터페이스 제공, 무한 스크롤 기능 구현."
                            }
                        }
                    ]
                },
                skills: {
                    title: "기술",
                    categories: [
                        {
                            name: "언어",
                            items: [
                                { name: "JavaScript (ES6+)", level: 90 },
                                { name: "Python", level: 85 },
                                { name: "Java", level: 75 },
                                { name: "HTML5/CSS3", level: 95 }
                            ]
                        },
                        {
                            name: "프론트엔드",
                            items: [
                                { name: "React.js", level: 90 },
                                { name: "Redux", level: 85 },
                                { name: "Vue.js", level: 70 },
                                { name: "Webpack/Babel", level: 75 }
                            ]
                        },
                        {
                            name: "백엔드",
                            items: [
                                { name: "Node.js (Express)", level: 90 },
                                { name: "Spring Boot", level: 75 },
                                { name: "Django", level: 70 },
                                { name: "RESTful API Design", level: 85 }
                            ]
                        },
                        {
                            name: "데이터베이스",
                            items: [
                                { name: "PostgreSQL", level: 80 },
                                { name: "MySQL", level: 75 },
                                { name: "MongoDB", level: 65 }
                            ]
                        },
                        {
                            name: "클라우드 & DevOps",
                            items: [
                                { name: "AWS (EC2, S3, RDS, Lambda)", level: 80 },
                                { name: "Docker", level: 75 },
                                { name: "Git", level: 90 },
                                { name: "Jenkins", level: 60 }
                            ]
                        },
                        {
                            name: "기타",
                            items: [
                                { name: "Agile/Scrum", level: 85 },
                                { name: "Unit Testing", level: 70 },
                                { name: "Problem Solving", level: 90 }
                            ]
                        }
                    ]
                },
                research: {
                    title: "연구",
                    items: [
                        {
                            title: "딥러닝 기반 이미지 인식 정확도 향상에 관한 연구",
                            publisher: "한국 소프트웨어 공학회 논문지",
                            date: "2021.10",
                            link: "http://sol-link.com/deeplearning-image-recognition"
                        },
                        {
                            title: "블록체인 기반 분산원장기술(DLT)의 보안 취약점 분석 및 개선 방안",
                            publisher: "한국 정보과학회 논문지",
                            date: "2020.07",
                            link: "http://sol-link.com/blockchain-security"
                        }
                    ]
                },
                awards: {
                    title: "수상/자격증",
                    items: [
                        {
                            name: "정보처리기사",
                            issuer: "한국산업인력공단",
                            date: "2018.05"
                        },
                        {
                            name: "웹 서비스 개발 경진대회 최우수상",
                            issuer: "한성대학교",
                            date: "2016.11"
                        },
                        {
                            name: "TOEIC 950점",
                            issuer: "ETS",
                            date: "2020.03"
                        }
                    ]
                }
            }
        },
        footer: {
            copyright: "© 2025 홍길동. All Rights Reserved."
        },
        modals: {
            contact: {
                title: "CONTACT ME",
                description: "문의하실 내용을 남겨주시면, 빠른 시일 내에 연락드리겠습니다.",
                nameLabel: "이름",
                emailLabel: "이메일",
                messageLabel: "메시지",
                sendButton: "보내기",
                closeButton: "닫기",
                successMessage: "성공적으로 전송되었습니다!",
                errorMessage: "전송에 실패했습니다. 다시 시도해주세요."
            },
            projectDetail: {
                viewProject: "프로젝트 보기",
                closeButton: "닫기"
            }
        }
    },
    [LANGUAGES.EN]: {
        navbar: {
            home: "Gildong Hong",
            sections: ["About", "Education", "Experience", "Projects", "Skills", "Research", "Awards/Certificates"]
        },
        summary: {
            title: "Summary",
            tagline: "Full-Stack Web Developer | Software Engineer",
            contact: {
                email: "gildong.hong@example.com",
                phone: "+82-10-1234-5678",
                location: "Seoul, South Korea"
            },
            keywords: ["JavaScript", "React", "Node.js", "Python", "SQL", "Cloud", "Agile", "DevOps"],
            qualifications: "Engineer Information Processing, TOEIC 950",
            externalLinks: {
                github: "GitHub",
                linkedin: "LinkedIn",
                blog: "Personal Blog"
            },
            ctaButton: "CONTACT ME"
        },
        contents: {
            sections: {
                intro: {
                    title: "About",
                    selfIntroduction: {
                        subtitle: "Self-Introduction",
                        text: `Hello, I'm Gildong Hong, a full-stack web developer. I am passionate about building intuitive and efficient web applications that provide the best user experience. With a Bachelor's degree in Computer Science and a Master's degree in Software Engineering, I have built a solid theoretical foundation. Over approximately 7 years, I have successfully completed various projects of different scales, developing both front-end and back-end capabilities. I am particularly proficient in developing services based on React.js and Node.js, and I have extensive experience in building and operating cloud environments using AWS and Docker. I enjoy learning and applying new technologies and excel at creating synergy through collaboration with colleagues. My goal is to solve complex problems, continuously improve, and grow.`
                    },
                    goals: {
                        subtitle: "Goals",
                        text: `I aim to lead changing web technology trends and contribute to developing innovative, user-centric services. I am particularly interested in integrating AI and data analysis technologies into web services to create new value. In the long term, I want to strengthen my architecture design capabilities to become an expert who can stably operate and scale large-scale systems. Furthermore, I want to actively share knowledge with team members to foster mutual growth and a positive development culture, and together, create successful projects.`
                    }
                },
                education: {
                    title: "Education",
                    items: [
                        {
                            degree: "M.S. in Software Engineering",
                            institution: "Hansung University",
                            period: "Mar. 2020 - Feb. 2022",
                            description: "Research on AI-based Software Development"
                        },
                        {
                            degree: "B.S. in Computer Science",
                            institution: "Hansung University",
                            period: "Mar. 2013 - Feb. 2017",
                            description: "In-depth study in Database Systems, Operating Systems, Algorithms, etc."
                        }
                    ]
                },
                experience: {
                    title: "Experience",
                    items: [
                        {
                            position: "Senior Software Engineer",
                            company: "ABC Tech Inc.",
                            period: "Mar. 2022 - Present",
                            duties: [
                                "Designed and developed backend APIs for cloud-based SaaS platforms (Node.js, Express, PostgreSQL, AWS)",
                                "Improved architecture and optimized performance for handling high-volume traffic",
                                "Built and operated CI/CD pipelines (Jenkins, Docker, Kubernetes)",
                                "Collaborated with front-end teams to integrate RESTful APIs and implement features"
                            ],
                            projects: [
                                { name: "Next-gen SaaS Platform Development", description: "New development of a B2B SaaS platform for large-scale users" },
                                { name: "Data Analysis System Construction", description: "Development of a user behavior data analysis and visualization system" }
                            ]
                        },
                        {
                            position: "Software Developer",
                            company: "XYZ Solutions",
                            period: "Mar. 2017 - Feb. 2022",
                            duties: [
                                "Developed responsive web service front-ends (React.js, Redux, SCSS)",
                                "Developed and maintained back-office system functionalities (Java, Spring Boot, MySQL)",
                                "Refactored existing system code and wrote test cases",
                                "Participated in and contributed to sprints using Agile development methodologies"
                            ],
                            projects: [
                                { name: "Online Shopping Mall Renewal", description: "UI/UX revamp for enhanced user convenience" },
                                { name: "Internal ERP System Improvement", description: "Expansion of accounting and inventory management modules" }
                            ]
                        }
                    ]
                },
                projects: {
                    title: "Projects",
                    items: [
                        {
                            id: 1,
                            name: "AI-based Recommendation System Development",
                            description: "Developed a system that recommends personalized content based on user behavior data.",
                            technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
                            period: "Jan. 2024 - Jun. 2024",
                            link: "https://github.com/gildong-hong/ai-recommender",
                            image: "https://via.placeholder.com/300x200?text=AI+Recommender+System",
                            detail: {
                                objective: "To build an AI-based recommendation system to improve user satisfaction and increase platform dwell time.",
                                contribution: "Responsible for backend API development and machine learning model deployment. Built and optimized data preprocessing pipelines.",
                                result: "15% improvement in recommendation accuracy, 10% increase in user click-through rate."
                            }
                        },
                        {
                            id: 2,
                            name: "Real-time Chat Web Application",
                            description: "Developed a real-time multi-user chat application using WebSockets.",
                            technologies: ["Node.js", "Socket.IO", "React", "Express"],
                            period: "Sep. 2023 - Dec. 2023",
                            link: "https://github.com/gildong-hong/realtime-chat-app",
                            image: "https://via.placeholder.com/300x200?text=Realtime+Chat+App",
                            detail: {
                                objective: "To implement a web application with real-time communication capabilities.",
                                contribution: "Developed front-end (React) UI and backend (Node.js, Socket.IO) real-time communication logic.",
                                result: "Successfully tested with 100 concurrent users, confirmed message delivery without delay."
                            }
                        },
                        {
                            id: 3,
                            name: "Cloud-based File Sharing Service",
                            description: "File upload/download and sharing service utilizing AWS S3.",
                            technologies: ["Java", "Spring Boot", "AWS S3", "React"],
                            period: "Mar. 2023 - Aug. 2023",
                            link: "https://github.com/gildong-hong/cloud-file-share",
                            image: "https://via.placeholder.com/300x200?text=Cloud+File+Share",
                            detail: {
                                objective: "To build a stable and scalable cloud-based file sharing service.",
                                contribution: "Developed Spring Boot-based REST API and integrated with AWS S3, implemented file encryption.",
                                result: "Ensured stable upload/download of large files, built user authentication and authorization system."
                            }
                        },
                        {
                            id: 4,
                            name: "Responsive Portfolio Website",
                            description: "Designed and developed a responsive website for a personal portfolio.",
                            technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
                            period: "Nov. 2022 - Dec. 2022",
                            link: "https://github.com/gildong-hong/responsive-portfolio",
                            image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
                            detail: {
                                objective: "To create a personal portfolio site that provides an optimized user experience across various devices.",
                                contribution: "UI/UX design, responsive design implementation, added dynamic effects using JavaScript.",
                                result: "Consistent layout and performance across desktop, tablet, and mobile environments."
                            }
                        },
                        {
                            id: 5,
                            name: "Blockchain-based Voting System",
                            description: "A transparent and secure voting system using the Ethereum blockchain.",
                            technologies: ["Solidity", "Truffle", "Ganache", "React"],
                            period: "May 2022 - Sep. 2022",
                            link: "https://github.com/gildong-hong/blockchain-voting",
                            image: "https://via.placeholder.com/300x200?text=Blockchain+Voting",
                            detail: {
                                objective: "To verify the transparency and security of a voting system using blockchain technology.",
                                contribution: "Developed and tested smart contracts (Solidity), implemented React-based front-end dApp.",
                                result: "Immutable voting records, ensured transparency of the voting process."
                            }
                        },
                        {
                            id: 6,
                            name: "Machine Learning Image Classification App",
                            description: "A web application that classifies images using pre-trained models.",
                            technologies: ["Python", "Django", "TensorFlow.js", "Vue.js"],
                            period: "Aug. 2021 - Jan. 2022",
                            link: "https://github.com/gildong-hong/ml-image-classifier",
                            image: "https://via.placeholder.com/300x200?text=Image+Classifier",
                            detail: {
                                objective: "To develop an application that allows easy use of machine learning models on the web.",
                                contribution: "Developed Django backend for image processing and model integration, Vue.js front-end.",
                                result: "Provided real-time classification results upon user image upload, ensured ease of model updates."
                            }
                        },
                        {
                            id: 7,
                            name: "Restaurant Reservation Management System",
                            description: "A system providing real-time reservation status and table management features.",
                            technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
                            period: "Oct. 2020 - Mar. 2021",
                            link: "https://github.com/gildong-hong/restaurant-reservation",
                            image: "https://via.placeholder.com/300x200?text=Reservation+System",
                            detail: {
                                objective: "To build a reservation management system to improve restaurant operational efficiency.",
                                contribution: "Developed Laravel-based backend API and database design, implemented front-end reservation form.",
                                result: "Implemented reservation conflict prevention, real-time reservation status tracking via admin page."
                            }
                        },
                        {
                            id: 8,
                            name: "Movie Information Search Website",
                            description: "Provides movie information search and popular movie lists using the TMDB API.",
                            technologies: ["React", "Redux", "Axios", "CSS Modules"],
                            period: "Apr. 2020 - Jul. 2020",
                            link: "https://github.com/gildong-hong/movie-search-app",
                            image: "https://via.placeholder.com/300x200?text=Movie+Search+App",
                            detail: {
                                objective: "To develop a website that allows users to easily search and explore movie information.",
                                contribution: "Developed React component-based UI, managed state using Redux, integrated TMDB API.",
                                result: "Provided fast search speed and intuitive user interface, implemented infinite scrolling."
                            }
                        }
                    ]
                },
                skills: {
                    title: "Skills",
                    categories: [
                        {
                            name: "Languages",
                            items: [
                                { name: "JavaScript (ES6+)", level: 90 },
                                { name: "Python", level: 85 },
                                { name: "Java", level: 75 },
                                { name: "HTML5/CSS3", level: 95 }
                            ]
                        },
                        {
                            name: "Front-end",
                            items: [
                                { name: "React.js", level: 90 },
                                { name: "Redux", level: 85 },
                                { name: "Vue.js", level: 70 },
                                { name: "Webpack/Babel", level: 75 }
                            ]
                        },
                        {
                            name: "Back-end",
                            items: [
                                { name: "Node.js (Express)", level: 90 },
                                { name: "Spring Boot", level: 75 },
                                { name: "Django", level: 70 },
                                { name: "RESTful API Design", level: 85 }
                            ]
                        },
                        {
                            name: "Databases",
                            items: [
                                { name: "PostgreSQL", level: 80 },
                                { name: "MySQL", level: 75 },
                                { name: "MongoDB", level: 65 }
                            ]
                        },
                        {
                            name: "Cloud & DevOps",
                            items: [
                                { name: "AWS (EC2, S3, RDS, Lambda)", level: 80 },
                                { name: "Docker", level: 75 },
                                { name: "Git", level: 90 },
                                { name: "Jenkins", level: 60 }
                            ]
                        },
                        {
                            name: "Others",
                            items: [
                                { name: "Agile/Scrum", level: 85 },
                                { name: "Unit Testing", level: 70 },
                                { name: "Problem Solving", level: 90 }
                            ]
                        }
                    ]
                },
                research: {
                    title: "Research",
                    items: [
                        {
                            title: "A Study on Improving Image Recognition Accuracy based on Deep Learning",
                            publisher: "Journal of Korean Institute of Software Engineers",
                            date: "Oct. 2021",
                            link: "http://sol-link.com/deeplearning-image-recognition"
                        },
                        {
                            title: "Analysis of Security Vulnerabilities and Improvement Measures for Blockchain-based Distributed Ledger Technology (DLT)",
                            publisher: "Journal of Korea Information Science Society",
                            date: "Jul. 2020",
                            link: "http://sol-link.com/blockchain-security"
                        }
                    ]
                },
                awards: {
                    title: "Awards/Certificates",
                    items: [
                        {
                            name: "Engineer Information Processing",
                            issuer: "Human Resources Development Service of Korea",
                            date: "May 2018"
                        },
                        {
                            name: "Web Service Development Contest Grand Prize",
                            issuer: "Hansung University",
                            date: "Nov. 2016"
                        },
                        {
                            name: "TOEIC 950",
                            issuer: "ETS",
                            date: "Mar. 2020"
                        }
                    ]
                }
            }
        },
        footer: {
            copyright: "© 2025 Gildong Hong. All Rights Reserved."
        },
        modals: {
            contact: {
                title: "CONTACT ME",
                description: "Please leave your inquiries, and I will contact you as soon as possible.",
                nameLabel: "Name",
                emailLabel: "Email",
                messageLabel: "Message",
                sendButton: "Send",
                closeButton: "Close",
                successMessage: "Successfully sent!",
                errorMessage: "Failed to send. Please try again."
            },
            projectDetail: {
                viewProject: "View Project",
                closeButton: "Close"
            }
        }
    }
};

let currentLanguage = LANGUAGES.KO; // Default language

function getLocalizedString(key) {
    const keys = key.split('.');
    let value = LOCALIZED_STRINGS[currentLanguage];
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Missing localized string for key: ${key} in language: ${currentLanguage}`);
            return `[MISSING_STRING:${key}]`; // Fallback for missing string
        }
    }
    return value;
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang; // Set HTML lang attribute for better accessibility
    updateUIForLanguageChange();
}
