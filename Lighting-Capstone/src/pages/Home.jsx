import LoginForm from '/src/login/loginForm.jsx';
import Profile from '/src/components/profile.jsx';

function Home() {
  return (
    <div className='h-screen space-y-10'>
      <div className="w-screen">
        <h1 className="mx-auto text-center ">Lighting Inventory</h1>
        <div className="text-center mt-10">
          <p >By:</p>
          <ol>
            <li>Lily Alessi</li>
            <li>Sophie Bowyer</li>
            <li>Billie Nolfi-Makau</li>
          </ol>
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbucBLhpnT_kbagut7MMgipsZLx1e20egOw&s' className="mx-auto mt-10" />

      </div>
      <div className='flex space-x-50 text-center justify-center'>
        <Profile
          name='Lily'
          job='webdesign'
          blurb='i am lily. fear me.'>
        </Profile>

        <Profile
          name='Sophie'
          job='master coder'
          blurb='i am sophie. i know all.'>
        </Profile>
        <Profile
          name='Billie'
          job='ideanator'
          blurb='i am billie. i am somewhere.'>
        </Profile>
      </div>
    </div>

  )
}
export default Home;