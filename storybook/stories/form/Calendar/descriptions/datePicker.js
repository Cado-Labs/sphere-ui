/* eslint-disable max-len */
import { DatePicker } from "../../../../../src"

const code = `
function DatePickerExample () {
  const [fields, setFields] = React.useState({
    date: new Date(),
    randeDate: [new Date(), new Date]
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="card">
      <div className="p-fluid p-grid p-formgrid">
        <div className="p-field p-col-12 p-md-2">
          <label htmlFor="date">DatePicker</label>
          <DatePicker 
            name="date" 
            value={fields.date} 
            onChange={onChange}
          />
        </div>
        <div className="p-field p-col-12 p-md-2">
          <label htmlFor="randeDate">DateRangePicker</label>
          <DatePicker 
            name="randeDate" 
            value={fields.randeDate} 
            onChange={onChange}
            mode="range"
            rangeButtonsBar
          />
        </div>
      </div>
    </div>
  )
}
`

export const datePicker = {
  header: "DatePicker",
  content: "Компонент DatePicker позволяет пользователю выбрать дату или диапазон дат.",
  code,
  scope: { DatePicker },
  descriptionProps: [
    { name: "id", type: "string", description: "Уникальный идентификатор элемента." },
    { name: "ref", type: "string", description: "Возможность получить доступ к DOM-узлам и методам компонента." },
    { name: "name", type: "string", description: "Определяет уникальное имя элемента формы." },
    { name: "value", type: "string", description: "Начальное значение элемента управления." },
    { name: "placeholder", type: "string", description: "Выводит текст внутри поля формы." },
    { name: "dateFormat", type: "string", description: "Формат даты." },
    { name: "yearRange", type: "string", description: "Доступные годы для выбора." },
    { name: "mode", type: "string", description: "Тип выбора даты (range, default)." },
    { name: "onChange", type: "function", description: "Обработчик события." },
    { name: "showIcon", type: "boolean", description: "Если этот параметр включен, рядом с полем ввода отображается кнопка со значком." },
    { name: "rangeButtonsBar", type: "boolean", description: "Отображение кнопок выбора разных диапазонов дат." },
    { name: "monthNavigator", type: "boolean", description: "Дропдаун выбора месяцев." },
    { name: "disabled", type: "boolean", description: "Текстовое поле не может изменяться пользователем." },
  ],
}
