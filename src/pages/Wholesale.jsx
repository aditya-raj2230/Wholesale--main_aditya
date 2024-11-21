import wholesaleImg from '../assets/images/wholesale-2.png'

const Wholesale = () => {
  return (
    <div className="w-screen h-screen relative">
      <img 
        src={wholesaleImg} 
        alt="Wholesale" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Wholesale
