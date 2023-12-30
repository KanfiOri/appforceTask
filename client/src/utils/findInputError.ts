interface Errors {
  [key: string] :any
}

const findInputError = (errors: any, name: string) => {
  console.log('errors123: ', errors)
  console.log('name123: ', name)
    const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {} as Errors)
    return filtered
}

export default findInputError