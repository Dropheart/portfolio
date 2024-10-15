export default function ProfilePicture({ img, desc, size }) {
  return (
    <img src={img} className="place-item-center size-full" alt={desc}/>
  )
}
