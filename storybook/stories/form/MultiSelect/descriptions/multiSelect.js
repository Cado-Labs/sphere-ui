/* eslint-disable max-len */
import { MultiSelect } from "@cadolabs/sphere-ui"

const code = `
function MultiSelectExample () {
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ]

  const [value, setValue] = React.useState(null)

  return (
    <div className="card">
      <div className="fluid grid formgrid">
        <div className="field col">
          <label htmlFor="city">MultiSelect</label>
          <div style={{ width: "200px" }}>
            <MultiSelect
              name="city"
              value={value}
              onChange={(e) => setValue(e.value)}
              options={citySelectItems}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
`

export const multiSelect = {
  header: "MultiSelect",
  content: "Компонент MultiSelect позволяет выбирать несколько элементов из коллекции выпадающего списка.",
  code,
  scope: { MultiSelect },
  descriptionProps: [
    { name: "id", type: "string", description: "Уникальный идентификатор элемента." },
    { name: "ref", type: "string", description: "Возможность получить доступ к DOM-узлам и методам компонента." },
    { name: "name", type: "string", description: "Определяет уникальное имя элемента формы." },
    { name: "value", type: "string", description: "Начальное значение элемента управления." },
    { name: "placeholder", type: "string", description: "Выводит текст внутри поля формы." },
    { name: "onChange", type: "function", description: "Обработчик события." },
    { name: "disabled", type: "boolean", description: "Текстовое поле не может изменяться пользователем." },
    { name: "options", type: "array", description: "Массив опций отображающие в раскрывающем списке." },
    { name: "filter", type: "boolean", description: "Отображение поля для поиска в раскрывающем списке." },
    { name: "filterBy", type: "string", description: "Ключ для поиска элементов в поле поиска" },
    { name: "optionDisabled", type: "string/function", description: "Имя свойства, которое используется для отключение опции." },
    { name: "optionLabel", type: "string", description: "Переопределение ключа label при отображении опции." },
    { name: "optionValue", type: "string", description: "Переопределение ключа value для значения опции." },
    { name: "optionGroupLabel", type: "string", description: "Ключ с именем группы для группированных опций." },
    { name: "optionGroupChildren", type: "string", description: "Ключ объекта с дочерними элементами для группировки опций." },
    { name: "inputId", type: "string", description: "Идентификатор поля ввода." },
    { name: "dropdownIcon", type: "string", description: "Класс значка раскрывающегося списка." },
    { name: "maxSelectedLabels", type: "number", description: "Определяет максимальное количество отображаемых в поле ввода выбранных опций." },
    { name: "panelClassName", type: "string", description: "Класс панели." },
    { name: "panelStyle", type: "string", description: "Стиль панели." },
    { name: "style", type: "string", description: "Стили для элемента." },
    { name: "selectedItemsLabel", type: "string", description: "При превышении данного количества опций, в поле будет выводится не выбранные опции, а их количество." },
    { name: "showClear", type: "boolean", description: "Отображение иконки очистки поля." },
    { name: "display", type: "string", description: "Вариант отображения выбранных значений." },
  ],
}
