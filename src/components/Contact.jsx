import React from 'react'
import envelop from '../assets/mail_icon.svg'
import phone from '../assets/call_icon.svg'
import loc from '../assets/location.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68c94658-9f5e-4e3e-82a0-d6a6c1471ad6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert('Form Submitted Successfully');
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className=' bg-black text-white mt-10 py-8' id='contact'>
      <h1 className="text-5xl text-blue-500 text-center">Get in touch</h1>
      <hr className="w-[150px] bg-blue-500 border-none h-1 mx-auto mt-3 mb-5" />
      <div className="container flex justify-around items-center px-6 flex-wrap">
        <div className="left w-[600px] leading-8 ">
          <div className="">
            <h1 className='text-blue-500 text-2xl'>let's talk</h1>
            <p className='font-normal'>i'm currently avalible to take on new project, so fell free to send me a message about anythin that you want me to work on, You can contact anytime.</p>
            <div className='flex justify-start flex-row gap-3 mt-5'>
                <img className='w-[30px]' src={phone} alt="" />
                <p>0331 2198808</p>
            </div>
            <div className='flex justify-start flex-row gap-3 mt-5'>
                <img className='w-[30px]' src={envelop} alt="" />
                <p>codelink83@gmail.com</p>
            </div>
            <div className='flex justify-start flex-row gap-3 mt-5'>
                <img className='w-[30px]' src={loc} alt="" />
                <p>G-12 Islamabad</p>
            </div>
          </div>
            
        </div>
        <div className="right w-[400px]">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
      <div>
        <label for="username" className="block text-sm font-medium leading-6 ">User Name</label>
        <div className="mt-2">
          <input id="username" name="username" type="text" autocomplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" placeholder='user name'/>
        </div>
      </div>
      <div>
        <label for="email" className="block text-sm font-medium leading-6 ">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" placeholder='email'/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 ">write your message here</label>
        </div>
        <div className="mt-2">
        <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 text-gray-700 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Type Text here'></textarea>
        </div>
      </div>

      <div>
        <button type="submit" className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Now</button>
      </div>
    </form>

    
  </div>
</div>
               
            
            
        </div>
      </div>
    </div>
  )
}

export default Contact
