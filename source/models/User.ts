// Here is example of model implementation

interface UserCreationAttributes {
  email: string
  password: string
  username: string
}

interface UserAttributes extends UserCreationAttributes {
  id: number
}

const USERS_CONTAINER: User[] = []

export default class User {
  public email?: string
  public password?: string
  public username?: string
  public id?: number

  public constructor(attributes: UserCreationAttributes) {
    const latestId = (USERS_CONTAINER[USERS_CONTAINER.length - 1].id ?? 0) + 1

    this.email = attributes.email
    this.password = attributes.password
    this.username = attributes.username
    this.id = latestId

    USERS_CONTAINER.push(this)
  }

  public static findOne({
    email,
    id,
    username,
  }: Partial<UserAttributes>): User | undefined {
    if (email) {
      return USERS_CONTAINER.find((user) => user.email === email)
    }

    if (username) {
      return USERS_CONTAINER.find((user) => user.username === username)
    }

    if (id) {
      return USERS_CONTAINER.find((user) => user.id === id)
    }
  }

  public update(attributes: Partial<UserCreationAttributes>): User | undefined {
    const userIndex = USERS_CONTAINER.findIndex((user) => user.id === this.id)
    if (userIndex >= 0) {
      USERS_CONTAINER[userIndex].email = attributes.email ?? this.email
      USERS_CONTAINER[userIndex].username = attributes.username ?? this.username
      USERS_CONTAINER[userIndex].password = attributes.password ?? this.password

      return this
    }
  }

  public comparePasswords(password: string): boolean {
    return this.password === password
  }
}
