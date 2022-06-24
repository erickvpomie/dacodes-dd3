import { BsArrowRight } from 'react-icons/all'

interface HelperProps {
    unlockFirstTime: () => any;
}

const Helper = ({ unlockFirstTime } : HelperProps) => {
  return (
      <div className='w-screen h-screen absolute top-0 left-0 z-[100] bg-[#1b1b1b80] flex items-center justify-center animate__animated animate__fadeIn'>
          <div className='w-3/6 h-6/10 bg-[#faf8ef] rounded px-6 py-4 text-[#776e65] animate__animated animate__fadeInUp delay-1s'>
              <span className='font-bold'>HOW TO PLAY:</span> Use your <span className='font-bold'>arrow keys</span> to
              move the tiles.<br/>
              Tiles with the same number <span className='font-bold'>merge into one</span> when they touch. Add them up
              to reach <span className='font-bold'>2048!</span>
              <br/><span className='flex items-center underline cursor-pointer' onClick={() => unlockFirstTime()}>Start playing <BsArrowRight
              className='ml-1' size={15}/></span>
          </div>
      </div>
  )
}
export default Helper
