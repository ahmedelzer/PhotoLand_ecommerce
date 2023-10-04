import React from 'react';
import {FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter} from 'react-icons/fa'; 

const Footer = () => {
  return (<footer className='pt-16 bg-primary '>
    <div className=' container mx-auto'>
      <div className=' text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold'>Subcribe to our newsletter</h2>
        <p className=' text-white/70'>
          Be the first to get the lastest news about trends, promotion and much more!
        </p>
      </div>
      <from className=' w-full max-w-3xl mx-auto flex flex-col md:flex-row
        gap-5 my-14'>
        <input type='text' placeholder='Your email address'
        className='input'/>
        <button className='btn btn-accent min-w-[150px]'>Join</button>
      </from>
      {/* th */}
      <div className=' text-base text-white/60 flex gap-x-6 capitalize
        max-w-max mx-auto mb-9'>
        <a href='#' className=' hover:text-white transition-all'>
          Return policy
        </a>
        <a href='#' className=' hover:text-white transition-all'>
          Track your order
        </a>
        <a href='#' className=' hover:text-white transition-all'>
          Shipping & delivery
        </a>
      </div>
      {/* sc */}
      <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
      <a href='https://www.facebook.com/iho.oisuyiyi' rel='noreferrer' target='_blank' className=' hover:text-white transition-all'>
          <FaFacebook/>
        </a>
      <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%A7%D8%B4%D8%B1%D9%81-8a3000269/'  className=' hover:text-white transition-all'>
          <FaLinkedin/>
        </a>
      <a rel='noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=201067921420&text&type=phone_number&app_absent=0' className=' hover:text-white transition-all'>
          <FaWhatsapp/>
        </a>
      <a rel='noreferrer' target='_blank' href='https://twitter.com/AihmadAshr45748' className=' hover:text-white transition-all'>
          <FaTwitter/>
        </a>
    </div>
    </div>
    <div className='py-10 border-t border-t-white/10'>
      <div className=' container mx-auto'>
        <div className=' text-center text-sm text-white/60'>
          Copyright &copy; Photoland 2023. Allrights reserved.</div>
      </div>
    </div>
    </footer>
    
    );
};

export default Footer;
