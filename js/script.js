document.addEventListener("DOMContentLoaded", () => {
  // Image Carousel
  const carouselElement = document.getElementById("imageCarousel")
  const carouselInner = document.querySelector(".carousel-inner")

  if (carouselInner) {
    fetch("images/carousel/")
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(data, "text/html")
        const imageLinks = Array.from(htmlDoc.querySelectorAll("a"))
          .filter((link) => link.href.match(/\.(jpe?g|png|gif)$/i))
          .map((link) => link.href)

        imageLinks.forEach((src, index) => {
          const div = document.createElement("div")
          div.className = `carousel-item${index === 0 ? " active" : ""}`
          div.innerHTML = `<img src="${src}" class="d-block w-100" alt="Carousel Image ${index + 1}">`
          carouselInner.appendChild(div)
        })

        // Initialize the carousel with automatic sliding
        // Import Bootstrap here if not already imported globally
        // Assuming Bootstrap is included via CDN, this line is not needed.  If using a different method, adjust accordingly.
        // import * as bootstrap from 'bootstrap'; // Or the correct import path

        new bootstrap.Carousel(carouselElement, {
          interval: 2000, // Change slide every 3 seconds
          ride: "carousel", // Enable automatic cycling
        })
      })
      .catch((error) => console.error("Error loading carousel images:", error))
  }

  // Event Cards
  const culturalEvents = [
    {title: "Mr. & Miss DIAT", image: "images/Event-pics/mr-miss.jpg", voteLink: ""}, 
    { title: "Dance Competition", image: "images/Event-pics/dance.jpeg", },
    { title: "Singing", image: "images/Event-pics/sing.jpeg" },
    { title: "Fashion Show", image: "images/Event-pics/fashion.jpg" },
    { title: "Treasure Hunt", image: "images/Event-pics/treasure-hunt.jpg" },
    { title: "Drama/Play", image: "images/Event-pics/drama.jpg" },
    { title: "Rangoli", image: "images/Event-pics/rangoli.jpg" },
    { title: "Short Film/Reels", image: "images/Event-pics/reels.jpg" },
    { title: "Photography", image: "images/Event-pics/photography.jpg" },
    { title: "Pot/T-Shirt/Face-Painting", image: "images/Event-pics/Face_painting.jpg" },
    { title: "Musical Chair", image: "images/Event-pics/musical-chair.png" },
    { title: "Antakshari", image: "images/Event-pics/antakshari.png" },
    { title: "Open Mic", image: "images/Event-pics/open-mic.jpg" },
    { title: "Story Writing", image: "images/Event-pics/story-writing.jpg" },
    { title: "Quiz", image: "images/Event-pics/quiz.jpg" },
    { title: "Debate", image: "images/Event-pics/debate.png" },
    { title: "Essay writing", image: "images/Event-pics/essay-writing.png" },
    { title: "Logo design", image: "images/Event-pics/logo-design.png" },
    { title: "Drawing", image: "images/Event-pics/drawing.png" },
    { title: "Painting", image: "images/Event-pics/painting.png" },
    { title: "Resume Template Writing", image: "images/Event-pics/resume-writing.jpg" }

  ]

  const sportsEvents = [
    { title: "Athletics", image: "images/Event-pics/athletics.png", rulesLink: "assets/athletics-rules.pdf" },
    { title: "Badminton", image: "images/Event-pics/badminton.png" , rulesLink: "assets/badminton-rules.pdf" },
    { title: "Basketball", image: "images/Event-pics/basketball.png", rulesLink: "assets/Basketball-rules.pdf" },
    { title: "Carrom", image: "images/Event-pics/carrom.jpg", rulesLink: "assets/carrom-rules.pdf" },
    { title: "Chess", image: "images/Event-pics/chess.png", rulesLink: "assets/chess-rules.pdf" },
    { title: "Cricket", image: "images/Event-pics/cricket.png", rulesLink: "assets/cricket-rules.pdf" },
    { title: "Dodgeball", image: "images/Event-pics/dodgeball.jpg", rulesLink: "assets/dodgeball-rules.pdf" },
    { title: "Squash", image: "images/Event-pics/squash.png", rulesLink: "assets/squash-rules.pdf" },
    { title: "Gymnasium", image: "images/Event-pics/gym.png", rulesLink: "assets/gym-rules.pdf" },
    { title: "E-sports", image: "images/Event-pics/e-sports.png", rulesLink: "assets/E-sports-rules.pdf" },
    { title: "Football", image: "images/Event-pics/football.png", rulesLink: "assets/Football-rules.pdf" },
    { title: "Kabaddi", image: "images/Event-pics/kabaddi.jpg", rulesLink: "assets/Kabaddi-rules.pdf" },
    { title: "Kho-Kho", image: "images/Event-pics/kho-kho.jpg", rulesLink: "assets/Kho-Kho-rules.pdf" },
    { title: "Table-Tennis", image: "images/Event-pics/table-tennis.png" , rulesLink: "assets/table-tennis-rules.pdf" },
    { title: "Tug-of-War", image: "images/Event-pics/tug-of-war.png", rulesLink: "assets/tug-of-war-rules.pdf" },
    { title: "Volleyball", image: "images/Event-pics/volleyball.png" , rulesLink: "assets/volleyball-rules.pdf" },
    { title: "Lawn Tennis", image: "images/Event-pics/lawn-tennis.png", rulesLink: "assets/Lawn-tennis-rules.pdf" },
  ]

//   function createEventCards(events, containerId) {
//     const container = document.getElementById(containerId)
//     if (container) {
//       events.forEach((event) => {
//         const col = document.createElement("div")
//         col.className = "col-md-4 mb-4"
//         col.innerHTML = `
//                     <div class="card event-card">
//                         <img src="${event.image}" class="card-img-top" alt="${event.title}>
//                         <div class="card-body">
//                             <h5 class="card-title">${event.title}</h5>
//                             <div class="d-grid gap-3 mt-4">
//     <a href="${event.registerLink}" target="_blank" class="btn btn-primary w-100">Register Now!!</a>
//     <a href="${event.rulesLink}" target="_blank" class="btn btn-outline-danger w-100">See the Rules!!</a>
// </div>
//                         </div>
//                     </div>
//                 `
//         container.appendChild(col)
//       })
//     }
//   }

  function createEventCards(events, containerId) {
    const container = document.getElementById(containerId)
    if (container) {
      events.forEach((event) => {
        const col = document.createElement("div")
        col.className = "col-md-4 mb-4"
        col.innerHTML = `
                    <div class="card event-card">
                        <div class="card-img-wrapper" style="height: 200px; overflow: hidden;">
                            <img src="${event.image}" class="card-img-top" alt="${event.title}" 
                                 style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            ${
                              event.title === "Mr. & Miss DIAT"
                                ? `
                            <div class="d-grid gap-2 mt-3">
                                <a href="${event.voteLink}" target="_blank" class="btn btn-vote btn-danger">Vote Now!!</a>
                            </div>
                            `
                                : ""
                            }
                            ${
                              containerId === "sportsEvents"
                                ? `
                            <div class="d-grid gap-2 mt-3">
                                <a href="${event.rulesLink}" target="_blank" class="btn btn-primary w-100">See the Rules!!</a>
                            </div>
                            `
                                : ""
                            }
                        </div>
                    </div>
                `
        container.appendChild(col)
      })
    }
  }

  createEventCards(culturalEvents, "culturalEvents")
  createEventCards(sportsEvents, "sportsEvents")


  function createScoresTable() {
    const scoresData = [
      { department: "Computer Science and engineering", cultural: 0, sports: 0 },
      { department: "Aerospace ", cultural: 0, sports: 0 },
      { department: "Mechanical ", cultural: 0, sports: 0 },
      { department: "Electronics", cultural: 0, sports: 0 },
      { department: "Applied Physics", cultural: 0, sports: 0 },
      { department: "Applied Mathematics", cultural: 0, sports: 0 },
      { department: "Materials science", cultural: 0, sports: 0 },
      { department: "School of Robotics", cultural: 0, sports: 0 },
      { department: "Technology Management", cultural: 0, sports: 0 },
      { department: "Applied Chemistry , Quantum Tech and School of energy and environment", cultural: 0, sports: 0 },
      { department: "Spandan Teams", cultural: 0, sports: 0 },
      { department: "NTS", cultural: 0, sports: 0 },
      { department: "Messengers", cultural: 0, sports: 0 },
      { department: "Teaching staff", cultural: 0, sports: 0 },
    ]

    const tableContainer = document.getElementById("scoresTable")
    if (tableContainer) {
      const table = document.createElement("table")
      table.className = "table table-striped table-hover"

      // Create table header
      const thead = document.createElement("thead")
      thead.innerHTML = `
        <tr>
          <th>Department</th>
          <th>Cultural Score</th>
          <th>Sports Score</th>
          <th>Total Score</th>
        </tr>
      `
      table.appendChild(thead)

      // Create table body
      const tbody = document.createElement("tbody")
      scoresData.forEach((data) => {
        const totalScore = data.cultural + data.sports
        const row = document.createElement("tr")
        row.innerHTML = `
          <td>${data.department}</td>
          <td>${data.cultural}</td>
          <td>${data.sports}</td>
          <td>${totalScore}</td>
        `
        tbody.appendChild(row)
      })
      table.appendChild(tbody)

      tableContainer.appendChild(table)
    }
  }

  // Create scores table if on the scores page
  if (document.getElementById("scoresTable")) {
    createScoresTable()
  }
})