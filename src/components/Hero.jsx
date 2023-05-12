import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
            <button type='button' onClick={() => window.open('https://github.com/jordanyussac')} className='black_btn'><i class="fa fa-github"></i></button>
            <button type='button' onClick={() => window.open('https://jordanyussac.github.io/Jordan-s-Portfolio/')} className='black_btn'><i class="	fa fa-user-circle"></i></button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero