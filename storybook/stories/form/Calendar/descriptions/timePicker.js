/* eslint-disable max-len */
import { TimePicker } from "../../../../../src"

const code = `
function TimePickerExample () {
  const [fields, setFields] = React.useState({
    time: new Date(),
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="p-fluid p-grid p-formgrid">
      <div className="p-field p-md-2">
        <label htmlFor="time">TimePicker</label>
        <TimePicker
          name="time"
          value={fields.time}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
`

export const timePicker = {
  header: "TimePicker",
  content: "Компонент TimePicker позволяет пользователю выбрать время (часы, минуты, секунды, милисекунды).",
  code,
  scope: { TimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: "Уникальный идентификатор элемента." },
    {
      name: "ref",
      type: "string",
      description: "Возможность получить доступ к DOM-узлам и методам компонента.",
    },
    { name: "name", type: "string", description: "Определяет уникальное имя элемента формы." },
    { name: "value", type: "string", description: "Начальное значение элемента управления." },
    { name: "placeholder", type: "string", description: "Выводит текст внутри поля формы." },
    { name: "dateFormat", type: "string", description: "Формат даты." },
    { name: "yearRange", type: "string", description: "Доступные годы для выбора." },
    { name: "mode", type: "string", description: "Тип выбора даты (range, default)." },
    { name: "onChange", type: "function", description: "Обработчик события." },
    {
      name: "showIcon",
      type: "boolean",
      description: "Если этот параметр включен, рядом с полем ввода отображается кнопка со значком.",
    },
    { name: "showSeconds", type: "boolean", description: "Показывать ли секунды." },
    { name: "showMillisec", type: "boolean", description: "Показывать ли милисекунды." },
    { name: "stepHour", type: "number", description: "Шаг изменения часа." },
    { name: "stepSecond", type: "number", description: "Шаг изменения секунд." },
    { name: "stepMinute", type: "number", description: "Шаг изменения минуты." },
    { name: "disabled", type: "boolean", description: "Текстовое поле не может изменяться пользователем." },
  ],
}
