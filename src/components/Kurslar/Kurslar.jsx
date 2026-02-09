
import style from './Kurslar.module.css'  // To'g'ri import
import frontendImg from '../assets/frontend-solution.png'  // Import qiling
import BackendImg from '../assets/backend.png'
import FoundationImg from '../assets/faundationj.webp'
import ReactNative from '../assets/mobil.png'
import AI from '../assets/Artificial-Intelligence.jpeg'
import PhytonImg from '../assets/7.jpg'

function Kurslar() {

    const KURS = [
        {
            name: 'Frontend',
            image: frontendImg,
            txt: 'Frontend - bu brauzer tomonida ishlaydigan kod. Foydalanuvchi interfeysi, animatsiyalar, formalar, tugmalar yaratiladi'
        },
        {
            name: 'backend',
            image: BackendImg,
            txt: 'Backend - bu server tomonida ishlaydigan kod. Malumotlar bazasi, autentifikatsiya, biznes logika boshqariladi'
        },
        {
            name: 'Foundation',
            image: FoundationImg,
            txt: 'Foundation - bu dasturlashning asoslari kursi. Algoritm, mantiq, malumot tuzilmalari orgatiladi.'
        },
        {
            name: 'Mobile Development',
            image: ReactNative,
            txt: 'Mobile Development - bu smartfon ilovalari yaratish. Android va iOS platformalari uchun native yoki cross-platform dasturlash.'
        },
        {
            name: 'Suniy Intellekt',
            image: AI,
            txt: 'Suniy Intellekt - mashinalar uchun aql yaratish jarayoni. Malumotlardan algoritmlari ishlab chiqiladi.'
        },
        {
            name: 'Phyton',
            image: PhytonImg,
            txt: "Python - eng ommabop dasturlash tili. Boshlang'ichlar uchun qulay, automatlashtirish sohalarida qo'llaniladi."
        },
    ]
    return (
        <div className={style.Kurslar}>
            <h1>Kurslar</h1>
            <div className={style.kursContent}>
                <div className={style.kurslarContent}>
                    {KURS.map((item, index) => {
                        return (
                            <div key={item.name} className={style.kursCart}>
                                <div className={style.imgCont}>
                                    <img src={item.image} alt={item.name}  />
                                </div>
                                <div className={style.txtCont}>
                                    <p>{item.name}</p>
                                    <span>{item.txt}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Kurslar