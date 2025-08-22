import hamishImg from '../assets/hamish.png'

function ProfileCard() {
  return (
    <div className="card bg-base-100/70 backdrop-blur-md border border-base-300/50 shadow-lg w-1/4 h-3/4 hover-elevate glow-border animate-float">
      <div className="card-body items-center text-center gap-4">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={hamishImg} alt="Hamish" />
          </div>
        </div>
        <div>
          <h2 className="card-title text-3xl gradient-text">Hamish McDonald</h2>
          <p className="text-ms opacity-70">Aspiring Game Programmer</p>
        </div>
        <div className="flex gap-3 pt-1">
          <a
            href="https://github.com/hamishmcd123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-outline"
            aria-label="GitHub"
          >
            <i className="devicon-github-original text-xl icon-hover"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hamish-mcdonald-4a6458248/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-outline"
            aria-label="LinkedIn"
          >
            <i className="devicon-linkedin-plain text-xl icon-hover"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
