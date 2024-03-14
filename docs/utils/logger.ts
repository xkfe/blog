type TextType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

// 定义一个类型，表示彩色文字的样式
interface TextStyle {
  text: string
  type: TextType
}

class Logger {
  // 声明一个对象，用于存储各种颜色的值
  private colorMap = {
    default: '#35495E',
    primary: '#3488ff',
    success: '#43B883',
    warning: '#e6a23c',
    danger: '#f56c6c',
  }

  // 打印一个 [ title | text ] 样式的信息
  public capsule(title: string, info: string, type: TextType = 'primary'): void {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${this.colorMap[type]}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent',
    )
  }

  // 打印彩色文字
  public colorful(textArr: TextStyle[]): void {
    console.log(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${this.colorMap[t.type]};`),
    )
  }

  // 打印 default 样式的文字
  public default(text: string): void {
    this.colorful([{ text, type: 'default' }])
  }

  // 打印 primary 样式的文字
  public primary(text: string): void {
    this.colorful([{ text, type: 'primary' }])
  }

  // 打印 success 样式的文字
  public success(text: string): void {
    this.colorful([{ text, type: 'success' }])
  }

  // 打印 warning 样式的文字
  public warning(text: string): void {
    this.colorful([{ text, type: 'warning' }])
  }

  // 打印 danger 样式的文字
  public danger(text: string): void {
    this.colorful([{ text, type: 'danger' }])
  }

  // 打印ASCII艺术字符
  public art(art: string, type: TextType = 'primary'): void {
    console.log(
      `%c${art}`,
      `font-size: 18px; color: ${this.colorMap[type]}; text-shadow: 1px 1px ${this.colorMap.default};`,
    )
  }
}

export default new Logger()

// 示例：
// // Create a new instance of the Logger class
// // Log some messages with different styles
// logger.capsule('Important Message', 'This is an important message');
// logger.capsule('Important Message', 'This is an important message', 'success');
// logger.capsule('Important Message', 'This is an important message', 'warning');
// logger.capsule('Important Message', 'This is an important message', 'danger');
// logger.primary('This is a primary message');
// logger.success('This is a success message');
// logger.warning('This is a warning message');
// logger.danger('This is a danger message');
// // Log a message using the ASCII art style
// const asciiArt = `
//  █████╗ ██╗   ██╗ █████╗ ██╗     ██╗███╗   ███╗███████╗
// ██╔══██╗╚██╗ ██╔╝██╔══██╗██║     ██║████╗ ████║██╔════╝
// ███████║ ╚████╔╝ ███████║██║     ██║██╔████╔██║█████╗
// ██╔══██║  ╚██╔╝  ██╔══██║██║     ██║██║╚██╔╝██║██╔══╝
// ██║  ██║   ██║   ██║  ██║███████╗██║██║ ╚═╝ ██║███████╗
// ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚═╝     ╚═╝╚══════╝`;
// logger.art(asciiArt, 'danger');
