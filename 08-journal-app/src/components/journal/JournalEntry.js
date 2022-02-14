

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">

      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.pinimg.com/originals/0c/b6/1a/0cb61ade4c09520cf4fdd06169797a4f.png)'
        }}
      ></div>

      <div className="journal__entry-body">
      <p className="journal__entry-title">
        Good day
      </p>
      <p className="journal__entry-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis voluptatum aspernatur cupiditate quasi nam omnis suscipit sint voluptas earum repellendus, expedita officiis, dolorem pariatur officia eveniet maiores alias? Inventore.
      </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
