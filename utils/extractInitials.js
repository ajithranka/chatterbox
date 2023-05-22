function extractInitials(fullName) {
  const names = fullName.split(' ')

  const initials = names.reduce((initials, name, i) => {
    if (i === 0 || i === names.length - 1) {
      initials += name.charAt(0)
    }
    return initials
  }, '')

  return initials.toUpperCase()
}

export default extractInitials
