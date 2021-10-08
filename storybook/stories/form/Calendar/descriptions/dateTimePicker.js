import { DateTimePicker } from "../../../../../src"

const code = `
function DateTimePickerExample () {
  const [fields, setFields] = React.useState({
    dateTime: new Date(),
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="p-fluid p-grid p-formgrid">
      <div className="p-field p-md-2">
        <label htmlFor="dateTime">DateTimePicker</label>
        <DateTimePicker
          name="dateTime"
          value={fields.dateTime}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
`

export const dateTimePicker = {
  header: "DateTimePicker",
  content: "Компонент DateTimePicker позволяет пользователю выбрать дату и время.",
  code,
  scope: { DateTimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: "Уникальный идентификатор элемента." },
    { name: "ref", type: "string", description: "Возможность получить доступ к DOM-узлам и методам компонента." },
    { name: "name", type: "string", description: "Определяет уникальное имя элемента формы." },
    { name: "value", type: "string", description: "Начальное значение элемента управления." },
    { name: "placeholder", type: "string", description: "Выводит текст внутри поля формы." },
    { name: "dateFormat", type: "string", description: "Формат даты." },
    { name: "yearRange", type: "string", description: "Доступные годы для выбора." },
    { name: "onChange", type: "function", description: "Обработчик события." },
    { name: "showIcon", type: "boolean", description: "Если этот параметр включен, рядом с полем ввода отображается кнопка со значком." },
    { name: "monthNavigator", type: "boolean", description: "Дропдаун выбора месяцев." },
    { name: "showSeconds", type: "boolean", description: "Показывать ли секунды." },
    { name: "showMillisec", type: "boolean", description: "Показывать ли милисекунды." },
    { name: "stepHour", type: "number", description: "Шаг изменения часа." },
    { name: "stepSecond", type: "number", description: "Шаг изменения секунд." },
    { name: "stepMinute", type: "number", description: "Шаг изменения минуты." },
    { name: "disabled", type: "boolean", description: "Текстовое поле не может изменяться пользователем."}
  ],
}
