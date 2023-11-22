import React from 'react'
import Image from 'next/image'
import ButtonMain from './component/buttons/ButtonMain'
import RootLayout from '@/app/layout'

export default function Home() {
  return (
    <RootLayout>
      <div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full'>

        {/* ОПИСАНИЕ И СЛОГАН */}

        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 mt-[88px]">
          <Image
            alt="Five"
            className="hidden md:block z-20"
            height="650"
            width="650"
            src="/images/DrawKit.svg"
          />

          <div className='flex flex-col w-[520px] h-[370px] gap-[20px] flex-shrink-0'>
            <p className='text-[64px] font-bold tracking-[5.5px] text-[#333333] h-[71px] text-center pt-5'>PHARMADVICE</p>

            <h1 className='font-semibold text-[#333333] text-[22px] antialiased tracking-[2.4px]'>Упрощаем взаимодействие с аптекой</h1>

            <h1 className='font-semibold text-base tracking-[0.075rem] text-[#333333] text-justify'>Сервис для <a className='text-[#ED6C6C]'>онлайн-консультаций</a> с фармацевтом и хранения <a className='text-[#ED6C6C]'>электронных рецептов</a>.</h1>

            <h2 className='text-sm text-[#333333] font-medium font-["Lato"] tracking-[0.02em] text-justify'>Проводите конференции и онлайн-чаты по любым вопросам с лучшим фармацевтом вашего города! Сохраняйте выписанные электронные рецепты, сравнивайте цены и смотрите их наличие в ближайших аптеках.</h2>

            <ButtonMain title={'Узнать больше!'}/>
          </div>
        </div>

        {/* КАКОЕ РЕШЕНИЕ МЫ ПРЕДЛАГАЕМ */}

        <div className='w-screen h-[615px] ml-[-365px] mt-[-90px] flex-shrink-0 rounded-[50px] bg-[#F2F8FF] flex justify-center items-center'>
          <div className='flex flex-col gap-[68px]'>
            <p className='font-bold text-[32px] pt-5 text-[#333333] h-[66px] tracking-widest antialiased z-30 '>Какое решение мы предлагаем</p>

            <div className='inline-flex flex-row gap-[100px] justify-center items-center'>
              <div className='flex flex-col bg-[#6B4EE6] opacity-50 h-[350px] w-[320px] rounded-[30px] py-[35px] px-[20px] relative'>
                <div className='flex flex-col justify-center items-center gap-[30px]'>
                  <p className='text-white text-center text-[18px] font-medium'>Для людей всех возрастов наш сервис предоставляет возможность найти необходимый препарат для поиска в ближайших аптеках вашего города по доступным ценам.</p>
                  <img src="/images/arrowcircler.svg" alt="стрелка" className='absolute bottom-[35px] left-0 right-0 m-auto'/>
                </div>
              </div>

              <div className='flex flex-col bg-[#0C4DCB] opacity-50 h-[350px] w-[320px] rounded-[30px] py-[35px] px-[20px] relative'>
                <div className='flex flex-col justify-center items-center gap-[30px]'>
                  <p className='text-white text-center text-[18px] font-medium'>В случае покупки лекарств для близких или пожилых людей, которые не могут самостоятельно посетить аптеку, пользователи также смогут получить помощь в выборе и поиске необходимых лекарств. </p>
                  <img src="/images/arrowcircler.svg" alt="стрелка" className='absolute bottom-[35px] left-0 right-0 m-auto'/>
                </div>
              </div>

              <div className='flex flex-col bg-[#F06D57] opacity-50 h-[350px] w-[320px] rounded-[30px] py-[35px] px-[20px] relative'>
                <div className='flex flex-col justify-center items-center gap-[30px]'>
                  <p className='text-white text-center text-[18px] font-medium'>В соответствии с нужными лекарствами, указаных в поиске, на картах будут указаны точки сеть аптек и отображать наименование препарата, цену и производителя.</p>
                  <img src="/images/arrowcircleright2.svg" alt="стрелка" className='absolute bottom-[35px] left-0 right-0 m-auto'/>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* КАК ЭТО РАБОТАЕТ */}

        <div className='flex flex-col'>
          <p className='font-bold text-[32px] tracking-[4.32px] antialiased mt-[48px] text-[#333333] h-[50px]'>Как это работает?</p>

          <div className='flex flex-row relative'>

            <div className='flex flex-col'>

              <div className='flex mt-[100px] flex-col items-end w-[290px] h-[134px] mb-[48px] gap-[5px] justify-end py-0 px-[10px]'>
                <span className='font-light text-3xl tracking-wide text-[#333333]'>02</span>
                <span className='text-[20px] font-semibold text-[#B29FF8] tracking-[2.7px]'>Поиск по карте</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide text-right'>Найдите ближайшие к Вам аптеки, в которых есть нужный препарат.</p>
              </div>

              <div className='flex mt-[115px] flex-col items-end w-[290px] h-[134px] gap-[5px] py-0 px-[10px]'>
                <span className='font-light text-3xl tracking-wide text-[#333333]'>04</span>
                <span className='text-[20px] font-semibold text-[#B29FF8] tracking-[2.7px]'>Онлайн-чат</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide text-right'>Начните чат-консультацию с фармацевтом, чтобы обсудить вопросы, связанные с лекарствами.</p>
              </div>

            </div>

            <Image
              alt="road"
              className="hidden md:block mt-4"
              height="560"
              width="36"
              src="/images/road.svg"
            />

            <div className='flex flex-col'>

              <div className='flex mt-4 flex-col w-[350px] h-[118px] mb-[116px] gap-[5px] py-0 px-[10px]'>
                <span className='font-light text-3xl tracking-wide text-[#333333]'>01</span>
                <span className='text-[20px] font-semibold text-[#B29FF8] tracking-[2.7px]'>Регистрация\авторизация</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide'>Войдите в систему, чтобы получить доступ к личному профилю пользователя.</p>
              </div>

              <div className='flex mt-0 flex-col w-[288px] h-[139px] gap-[5px] py-0 px-[10px]'>
                <span className='font-light text-3xl text-[#333333] tracking-wide'>03</span>
                <span className='text-[20px] font-semibold text-[#B29FF8] tracking-[2.7px]'>Выбор аптеки</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide'>Узнайте в какой аптеке лучшая цена и качество товара, а также отзывы и производителя</p>
              </div>

            </div>

            <Image
              alt="cool"
              className="absolute md:block right-0"
              height="589"
              width="589"
              src="/images/DrawKit_2.svg"
            />

          </div>

        </div>

        {/* НАША КОМАНДА */}

        <div className='flex flex-col mt-[36px]'>

          <span className='m-auto h-[52px] pt-[20px] font-bold text-[32px] tracking-widest text-[333333] antialiased'>Наша команда</span>

          <div className='flex flex-row m-auto mt-[38px] gap-[100px] mb-10'>

            <div className='flex flex-col gap-1'>
              <Image
                alt='teamlid'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/Teamlid.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-[#333333] m-auto'>Бессарабенко Мария</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Тимлид, fullstack-разработчик</p>
            </div>

            <div className='flex flex-col gap-1'>
              <Image
                alt='anal'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/Anal.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-[#333333] m-auto'>Умерова Аминна</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Аналитик, дизайнер</p>
            </div>

            <div className='flex flex-col gap-1'>
              <Image
                alt='ui-ux'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/UIux.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-[#333333] m-auto'>Новинкина Анастасия</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Frontend разработчик, UI/UX</p>
            </div>

          </div>

        </div>

      </div>
    </RootLayout>
  )
}
