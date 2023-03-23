import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

// template_1srzh5m
// service id : service_4yz0t8k
// public key : yOuV3YnxSdl5ZQFan
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_4yz0t8k", "template_1srzh5m", {
      from_name: form.name,
      to_name: "Yanis",
      from_email: form.email,
      to_email: "yanis.ikhe@gmail.com",
      message: form.message,
    } ,"yOuV3YnxSdl5ZQFan").then(() => {
      setLoading(false)
      alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais !')
      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert("Oups, quelque chose s'est mal passé...")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ce que vous avez vu vous a plu ?</p>
        <h3 className={styles.sectionHeadText}>Contactez-moi.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* nom */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Nom</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Quel est votre nom ?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />            
          </label>

          {/* email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Quel est votre email ?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          {/* message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="Que voulez vous dire ?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")