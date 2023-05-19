
export default function Logo(props: any) {
    const {renderDefault, title } = props;

  return (
    <div>
        {/* MyLogo */}
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
