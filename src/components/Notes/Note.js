
  const Note = ({id,name}) => {
return (
    <div class="pt-5">{/* 추천학습 콘텐츠 박스 */}
    {/* 단어장 박스 */}
    <div class="flex space-x-5">
        <div class="w-80 h-15 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <h1 class="subpixel-antialiased text-lg font-semibold text-gray-600">{name}</h1>
        </div>
    </div>
</div>
)
  };

  export default Note;