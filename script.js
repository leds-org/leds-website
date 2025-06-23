// Testimonials data
const testimonials = [
  {
    name: "Tarcísio",
    role: "Desenvolvedor – Banco BTG Pactual",
    content:
      "Se me perguntassem se há algo de que me arrependo no LEDS, certamente seria o fato de não ter participado do laboratório mais cedo, durante a faculdade.",
    location: "LEDS Serra",
  },
  {
    name: "Renan Osório Rios",
    role: "Professor – Ifes Campus Colatina",
    content:
      "Participar do LEDS como orientador virou a chave na minha carreira como professor. O LEDS me mostrou que o professor precisa viver o mercado para ensinar algo conectado com a realidade.",
    location: "LEDS Colatina",
  },
  {
    name: "Vinícius",
    role: "Ex-integrante LEDS Serra",
    content:
      "O LEDS me proporcionou alguns atalhos na minha carreira. Isso não significa que tornou o caminho mais fácil, mas sim que me permitiu ter maiores responsabilidades na área de desenvolvimento de software logo no início.",
    location: "LEDS Serra",
  },
  {
    name: "Ex-LEDS",
    role: "Desenvolvedor – Empresa nos EUA",
    content:
      "O LEDS definitivamente é uma faculdade dentro do IFES. Hoje trabalho para uma empresa dos Estados Unidos — e agora só falta conquistar o mundo 😁.",
    location: "LEDS Serra",
  },
  {
    name: "Diego Pasti",
    role: "Ex-integrante LEDS – Consultor e Desenvolvedor",
    content:
      "Participei do LEDS de 2014 a 2016. Foi uma experiência transformadora. Mais que um programador, me tornei um resolvedor de problemas.",
    location: "LEDS Serra",
  },
]

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  initMobileMenu()
  initTestimonialSlider()
  initVideoModal()

  // Set active navigation link
  setActiveNavLink()
})

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Toggle icon
      const icon = mobileMenuBtn.querySelector("svg")
      if (mobileMenu.classList.contains("active")) {
        icon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`
      } else {
        icon.innerHTML = `<line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>`
      }
    })

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("svg")
        icon.innerHTML = `<line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>`
      })
    })
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Testimonial slider functionality
function initTestimonialSlider() {
  const container = document.getElementById("testimonialContainer")
  const dotsContainer = document.getElementById("testimonialDots")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (!container || !dotsContainer || !prevBtn || !nextBtn) return

  let currentIndex = 0

  // Create testimonial track
  const track = document.createElement("div")
  track.className = "testimonial-track"

  // Add testimonials to track (use only first 5 for homepage)
  const homeTestimonials = testimonials.slice(0, 5)

  homeTestimonials.forEach((testimonial, index) => {
    const card = document.createElement("div")
    card.className = "testimonial-card"

    // Truncate content for homepage
    const truncatedContent =
      testimonial.content.length > 200 ? testimonial.content.substring(0, 200) + "..." : testimonial.content

    card.innerHTML = `
      <p class="testimonial-content">${truncatedContent}</p>
      <div class="testimonial-author">
        <div class="testimonial-name">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}</div>
      </div>
    `
    track.appendChild(card)
  })

  container.appendChild(track)

  // Create dots
  homeTestimonials.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.className = "testimonial-dot"
    if (index === 0) dot.classList.add("active")
    dot.addEventListener("click", () => goToSlide(index))
    dotsContainer.appendChild(dot)
  })

  // Navigation functions
  function goToSlide(index) {
    currentIndex = index
    track.style.transform = `translateX(-${currentIndex * 100}%)`

    // Update dots
    const dots = dotsContainer.querySelectorAll(".testimonial-dot")
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex)
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % homeTestimonials.length
    goToSlide(currentIndex)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + homeTestimonials.length) % homeTestimonials.length
    goToSlide(currentIndex)
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Auto-advance every 5 seconds
  setInterval(nextSlide, 5000)
}

// Video modal functionality
function initVideoModal() {
  const modal = document.getElementById("videoModal")
  const modalVideo = document.getElementById("modalVideo")

  if (!modal || !modalVideo) return

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeVideoModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeVideoModal()
    }
  })
}

function openVideoModal() {
  const modal = document.getElementById("videoModal")
  const modalVideo = document.getElementById("modalVideo")

  if (modal && modalVideo) {
    modalVideo.src = "https://player.vimeo.com/video/1093765823?autoplay=1&loop=1"
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal")
  const modalVideo = document.getElementById("modalVideo")

  if (modal && modalVideo) {
    modal.classList.remove("active")
    modalVideo.src = ""
    document.body.style.overflow = ""
  }
}

// Form submission handler (for contact forms)
function handleFormSubmit(e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form submitted:", data)

  // Show success message
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

  // Reset form
  e.target.reset()
}

// Smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
})

// Intersection Observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(".team-card, .photo-card")
  animatedElements.forEach((el) => observer.observe(el))
}

// Initialize scroll animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations)
