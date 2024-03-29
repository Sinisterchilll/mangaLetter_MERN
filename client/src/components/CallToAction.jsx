import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about us?
            </h2>
            {/* <p className='text-gray-500 my-2'>
                Checkout these links!
            </p> */}
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://mangaletter.onrender.com/about" target='_blank' rel='noopener noreferrer'>
                    me
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://static.wikia.nocookie.net/faf2fa40-6c7e-4910-9b04-a0ee169a1d8a/scale-to-width-down/800" />
        </div>
    </div>
  )
}