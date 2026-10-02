function ProfileCard({ image, name, surname, job, bio }) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold mt-4">
        {name} {surname}
      </h2>

      <p className="text-blue-600 font-medium mt-2">
        {job}
      </p>

      <p className="text-gray-600 mt-4">
        {bio}
      </p>
    </div>
  )
}

export default ProfileCard