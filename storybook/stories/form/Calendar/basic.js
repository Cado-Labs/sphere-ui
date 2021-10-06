import { Calendar } from "./Calendar"

export const basic = {
  header: "Calendar",
  content: "Описание кнопки",
  code: "<Calendar />",
  scope: { Calendar },
  descriptionProps: [
    { name: "disable", type: "boolean", description: "Блокирует доступ к кнопке и её изменение." },
    { name: "tooltip", type: "any", description: "Всплывающая подсказка." },
    { name: "loading", type: "boolean", description: "Отображение значка загрузки." },
  ],
}
