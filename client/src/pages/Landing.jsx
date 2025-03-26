import bg from '../assets/image/background.jpg';


function landing() {
  return (
    <main>
      <div class="hero full-height p-5 d-md-flex justify-content-center">
        <h1 class="display-5 text-justify">Your Perfect Event Starts Here
        </h1>
        <div class="mt-md-5">
          <p class="text-primary mt-5 fs-4">Rent stunning event spaces tailored for every occasion — weddings, conferences, parties, and more.</p>
          <button class="btn btn-primary">Book Your Event Now</button>
        </div>
      </div>
      <div class="bg-secondary full-height p-5">
        <h1>Why Choose Us?</h1>
        <div class="d-md-flex justify-content-center mt-5 p-4">
          <p class="p-5 fs-3 text-justify">
            <strong>Experienced Team:</strong> With years of experience in event planning and coordination, our team ensures that every detail is covered.
          </p>
          <p class="p-5 fs-3 text-justify">
            <strong>Versatile Spaces:</strong> From intimate gatherings to large conferences, we have a venue for every occasion.
          </p>
          <p class="p-5 fs-3 text-justify">
            <strong>Tailored Packages:</strong> We offer flexible event packages designed to meet your unique needs and budget.
          </p>
          <p class="p-5 fs-3 text-justify">
            <strong>Top-Notch Service:</strong> Our dedicated event managers work with you every step of the way to make your event flawless.
          </p>
        </div>
      </div>
      <div class="bg-secondary full-height p-5" id="features">
        <h1>Features</h1>
        <div class="d-md-flex justify-content-center p-4">
          <div class="card card-long text-white bg-primary m-3">
            <div class="card-body" id="wedding">
              <h4 class="card-title">Wedding</h4>
            
            </div>
          </div>
          <div class="card card-long text-white bg-primary m-3">
            <div class="card-body" id="corpo-event">
              <h4 class="card-title">Corporate Events</h4>
            
            </div>
          </div>
          <div class="card card-long text-white bg-primary m-3">
            <div class="card-body" id="birthday">
              <h4 class="card-title">Birthday Parties</h4>
            
            </div>
          </div>
          <div class="card card-long text-white bg-primary m-3">
            <div class="card-body" id="private-event">
              <h4 class="card-title">Private Events</h4>
            
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
export default landing