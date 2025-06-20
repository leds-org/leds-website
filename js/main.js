// Import Lucide icons library
const lucide = require("lucide")

// Declare testimonials array
const testimonials = [
  { content: "Great product!", name: "John Doe", role: "Customer" },
  { content: "Excellent service!", name: "Jane Smith", role: "User" },
]

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

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
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileMenu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x")
      } else {
        icon.setAttribute("data-lucide", "menu")
      }
      lucide.createIcons()
    })

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.setAttribute("data-lucide", "menu")
        lucide.createIcons()
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

  // Add testimonials to track
  testimonials.forEach((testimonial, index) => {
    const card = document.createElement("div")
    card.className = "testimonial-card"
    card.innerHTML = `
            <p class="testimonial-content">${testimonial.content}</p>
            <div class="testimonial-author">
                <div class="testimonial-name">${testimonial.name}</div>
                <div class="testimonial-role">${testimonial.role}</div>
            </div>
        `
    track.appendChild(card)
  })

  container.appendChild(track)

  // Create dots
  testimonials.forEach((_, index) => {
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
    currentIndex = (currentIndex + 1) % testimonials.length
    goToSlide(currentIndex)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    goToSlide(currentIndex)
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Auto-advance (optional)
  // setInterval(nextSlide, 5000);
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
    modalVideo.src = "https://player.vimeo.com/video/1093373619?autoplay=1&loop=1"
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

// Utility functions
function createElement(tag, className, innerHTML) {
  const element = document.createElement(tag)
  if (className) element.className = className
  if (innerHTML) element.innerHTML = innerHTML
  return element
}

function getStatusColor(status) {
  switch (status) {
    case "Disponível":
      return "rgba(34, 197, 94, 0.1)"
    case "Beta":
      return "rgba(245, 158, 11, 0.1)"
    case "Em Desenvolvimento":
      return "rgba(59, 130, 246, 0.1)"
    default:
      return "rgba(156, 163, 175, 0.1)"
  }
}

function getStatusTextColor(status) {
  switch (status) {
    case "Disponível":
      return "rgb(21, 128, 61)"
    case "Beta":
      return "rgb(180, 83, 9)"
    case "Em Desenvolvimento":
      return "rgb(29, 78, 216)"
    default:
      return "rgb(75, 85, 99)"
  }
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

// Add loading states to buttons
function addLoadingState(button, text = "Carregando...") {
  const originalText = button.innerHTML
  button.innerHTML = text
  button.disabled = true

  return function removeLoadingState() {
    button.innerHTML = originalText
    button.disabled = false
  }
}

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
  const animatedElements = document.querySelectorAll(".card, .team-card, .photo-card")
  animatedElements.forEach((el) => observer.observe(el))
}

// Initialize scroll animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations)
