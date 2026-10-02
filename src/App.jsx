import ProfileCard from "./ProfileCard"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <ProfileCard
        image="https://avatars.mds.yandex.net/i?id=5add2f8dea6aa7fa0053199650352eb5801c01dc-10152094-images-thumbs&n=13"
        name="Ayan"
        surname="Qurbanova"
        job="Computer Engineering Student"
        bio="I am a Computer Engineering student interested in web development and JavaScript."
      />

    </div>
  )
}

export default App