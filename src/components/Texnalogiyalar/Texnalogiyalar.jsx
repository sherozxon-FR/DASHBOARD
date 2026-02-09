
import style from './Texnalogiyalar.module.css'

import C from './assets/c++.jpg'
import Native from './assets/imagenative.webp'
import JS from './assets/JavaScript_logo_2.svg.png'
import NJ from './assets/nextjs-training-191888688644054_l.jpg'
import Node from './assets/Node.js_logo.svg'
import PHP from './assets/pngimg.com - php_PNG26.png'
import PHYTON from './assets/Python-Symbol.png'
import TS from './assets/TS.png'




function Texnalogiyalar() {

    const TECHNOLOGIESS = [
        {
            id: 1,
            name: 'C++',
            image: '/assets/cpp-logo.png',
            description: 'C++ - yuqori samarali dasturlash tili. O\'yinlar, operatsion tizimlar, embedded sistemalar yaratish uchun ishlatiladi. Tez ishlash va xotira boshqaruvi asosiy kuchi. Unreal Engine, Adobe dasturlari C++ da yozilgan.',
            purpose: 'O\'yin yaratish, tizim dasturlash, yuqori performans talab qilinadigan loyihalar',
            difficulty: 'Qiyin',
            category: 'System Programming'
        },
        {
            id: 2,
            name: 'JavaScript',
            image: '/assets/javascript-logo.png',
            description: 'JavaScript - veb-saytlarni interaktiv qiluvchi til. Brauzerda ishlaydi, DOM bilan ishlash, hodisalarni boshqarish imkonini beradi. Frontend va backend (Node.js) uchun universal til. Eng mashhur dasturlash tili.',
            purpose: 'Veb-saytlarga dinamiklik qo\'shish, interaktiv elementlar yaratish, form validatsiya',
            difficulty: 'O\'rta',
            category: 'Web Development'
        },
        {
            id: 3,
            name: 'React Native',
            image: '/assets/react-native-logo.png',
            description: 'React Native - cross-platform mobil ilovalar yaratish framework. JavaScript yordamida Android va iOS uchun bitta kod bazasi. Facebook tomonidan yaratilgan. Instagram, Airbnb ishlatgan.',
            purpose: 'iOS va Android uchun mobil ilovalar bir vaqtda yaratish, vaqt va resurs tejash',
            difficulty: 'O\'rta',
            category: 'Mobile Development'
        },
        {
            id: 4,
            name: 'Next.js',
            image: '/assets/nextjs-logo.png',
            description: 'Next.js - React asosidagi full-stack framework. Server-side rendering (SSR), static site generation (SSG), API routes imkonini beradi. SEO optimallashtirilgan, tez yuklanadigan saytlar yaratish uchun. Vercel tomonidan yaratilgan.',
            purpose: 'SEO-friendly veb-saytlar, tez yuklanuvchi ilovalar, full-stack loyihalar yaratish',
            difficulty: 'O\'rta',
            category: 'Web Framework'
        },
        {
            id: 5,
            name: 'PHP',
            image: '/assets/php-logo.png',
            description: 'PHP - server-side skript tili. WordPress, Laravel, Symfony framework asosi. Ma\'lumotlar bazasi bilan oson ishlash, dinamik veb-saytlar yaratish. Facebook dastlab PHP da yozilgan. Web hosting xizmatlarida keng qo\'llaniladi.',
            purpose: 'Dinamik veb-saytlar, CMS tizimlar (WordPress), server-side dasturlash',
            difficulty: 'Oson',
            category: 'Backend Development'
        },
        {
            id: 6,
            name: 'Python',
            image: '/assets/python-logo.png',
            description: 'Python - universal va o\'qish oson til. Web (Django, Flask), AI/ML (TensorFlow), Data Science (Pandas), avtomatlashtirish uchun ishlatiladi. Sodda sintaksis, katta kutubxonalar to\'plami. Google, NASA, Instagram ishlatadi.',
            purpose: 'Web backend, suniy intellekt, ma\'lumotlar tahlili, automatlashtirish, ilmiy hisoblashlar',
            difficulty: 'Oson',
            category: 'Universal'
        },
        {
            id: 7,
            name: 'TypeScript',
            image: '/assets/typescript-logo.png',
            description: 'TypeScript - JavaScript ning kengaytirilgan versiyasi. Statik tip tekshirish, OOP imkoniyatlari, katta loyihalar uchun qulay. Microsoft tomonidan yaratilgan. Xatolarni kod yozish paytida aniqlaydi. Angular, Vue 3 TypeScript qo\'llab-quvvatlaydi.',
            purpose: 'Katta loyihalar, xatolarni kamaytirib ishonchli kod yozish, komanda ishida standartlashtirish',
            difficulty: 'O\'rta',
            category: 'Web Development'
        },
        {
            id: 8,
            name: 'Node.js',
            image: '/assets/nodejs-logo.png',
            description: 'Node.js - JavaScript runtime muhiti. Server-side dasturlash uchun JavaScript ishlatish imkonini beradi. Tez, asynchronous, real-time ilovalar yaratish uchun ideal. Express.js framework bilan backend API yaratiladi. Netflix, PayPal ishlatadi.',
            purpose: 'Backend API yaratish, real-time chat ilovalar, microservices, server dasturlash',
            difficulty: 'O\'rta',
            category: 'Backend Development'
        }
    ];

    const TECHNOLOGIES = [
        {
            id: 1,
            name: 'C++',
            image: C
        },
        {
            id: 2,
            name: 'JavaScript',
            image: JS
        },
        {
            id: 3,
            name: 'React Native',
            image: Native
        },
        {
            id: 4,
            name: 'Next.js',
            image: NJ
        },
        {
            id: 5,
            name: 'PHP',
            image: PHP
        },
        {
            id: 6,
            name: 'Python',
            image: PHYTON
        },
        {
            id: 7,
            name: 'TypeScript',
            image: TS
        },
        {
            id: 8,
            name: 'Node.js',
            image: Node
        }
    ];

    return (
        <div className={style.Texnalogiyalar}>
            <h1>Texnalogiyalar</h1>
            <div className={style.texnalogContent}>
                {TECHNOLOGIES.map((item) => (
                    <div key={item.id} className={style.texnalogCart}>
                        <div className={style.imgcont}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className={style.textcont}>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Texnalogiyalar