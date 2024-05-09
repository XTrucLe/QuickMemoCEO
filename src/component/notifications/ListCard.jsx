import { Card } from 'antd'
import React from 'react'

const ListCard = ({ ListNotification }) => {

    return (
        <div>
            {ListNotification?.map((item, index) => (
                <Card
                    title={item?.title}
                    size='small'
                    style={{ marginBottom: '4px' }}
                    key={index}
                >
                    <p><strong>Name: </strong>{item?.Name}</p>
                    <p><strong>Day Create:</strong>{item?.DayCreate}</p>
                    <p><strong>Reminder:</strong>{item?.Reminder}</p>
                </Card>
            ))}
        </div>
    )
}

export default ListCard