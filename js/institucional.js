const pillars = [
  { icon: "book", title: "Education", description: "Our commitment to education." },
  // Add more pillars here
]

const campuses = [
  {
    color: "from-blue-500 to-green-500",
    name: "Main Campus",
    description: "Our main campus location.",
    address: "123 Main St",
  },
  // Add more campuses here
]

const areas = [
  {
    color: "from-red-500 to-yellow-500",
    icon: "heart",
    name: "Community",
    description: "Our focus on community engagement.",
  },
  // Add more areas here
]

const lucide = {
  createIcons: () => {
    // Implementation for creating icons
  },
}

document.addEventListener("DOMContentLoaded", () => {
  loadPillars()
  loadCampuses()
  loadAreas()
})

function loadPillars() {
  const pillarsGrid = document.getElementById("pillarsGrid")
  if (!pillarsGrid) return

  pillars.forEach((pillar, index) => {
    const pillarCard = document.createElement("div")
    pillarCard.className = "card"
    pillarCard.style.textAlign = "center"

    pillarCard.innerHTML = `
            <div class="card-header">
                <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, var(--leds-blue), var(--leds-green)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                    <i data-lucide="${pillar.icon}" style="color: white;"></i>
                </div>
                <h3 class="card-title">${pillar.title}</h3>
            </div>
            <div class="card-content">
                <p style="color: var(--gray-600); text-align: center; line-height: 1.6;">${pillar.description}</p>
            </div>
        `

    pillarsGrid.appendChild(pillarCard)
  })

  lucide.createIcons()
}

function loadCampuses() {
  const campusesGrid = document.getElementById("campusesGrid")
  if (!campusesGrid) return

  campuses.forEach((campus, index) => {
    const campusCard = document.createElement("div")
    campusCard.className = "card"

    campusCard.innerHTML = `
            <div class="card-header">
                <div style="padding: 0.75rem; border-radius: var(--radius); background: linear-gradient(135deg, ${campus.color.replace("from-", "var(--").replace("to-", "var(--").replace("500", "").replace("600", "")}); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; width: fit-content;">
                    <i data-lucide="map-pin" style="color: white;"></i>
                </div>
                <h3 class="card-title">${campus.name}</h3>
            </div>
            <div class="card-content" style="display: flex; flex-direction: column; gap: 0.75rem;">
                <p style="color: var(--gray-600); line-height: 1.6;">${campus.description}</p>
                <div style="padding-top: 0.5rem; border-top: 1px solid var(--gray-100);">
                    <p style="font-size: 0.875rem; color: var(--gray-500);">${campus.address}</p>
                </div>
            </div>
        `

    campusesGrid.appendChild(campusCard)
  })

  lucide.createIcons()
}

function loadAreas() {
  const areasGrid = document.getElementById("areasGrid")
  if (!areasGrid) return

  areas.forEach((area, index) => {
    const areaCard = document.createElement("div")
    areaCard.className = "card"

    areaCard.innerHTML = `
            <div class="card-header">
                <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, ${area.color.replace("from-", "var(--").replace("to-", "var(--").replace("500", "").replace("600", "")}); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                    <i data-lucide="${area.icon}" style="color: white;"></i>
                </div>
                <h3 class="card-title">${area.name}</h3>
            </div>
            <div class="card-content">
                <p style="color: var(--gray-600); line-height: 1.6;">${area.description}</p>
            </div>
        `

    areasGrid.appendChild(areaCard)
  })

  lucide.createIcons()
}
