<template>
    <div class="todo-item">
        <button class="remove-btn" @click="btnClick">&times;</button>
        <div :class="['todo-category', getCategoryColor]">
            <i :class="['fas', getCategoryIcon]"></i>
            <!--:style="{ backgroundColor: getCategoryColor}"-->
            {{ todo.category }}
        </div>
        <div class="todo-text">
            {{ todo.text }}
        </div>
    </div>
</template>
<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    //props: ["category", "text"]
    computed: {
        getCategoryColor() {
            //如何在這裡取得 props?
            //this.屬性名稱
            let color = "";
            if (this.todo.category == "財務") {
                color = "tag-gold";
            }
            else if (this.todo.category == "健康") {
                color = "tag-tomato";
            }
            else
                color = "tag-sky";
            return color;
        },
        getCategoryIcon() {
            let icon = "";
            const iconMap = {
                "財務": "fa-wallet",
                "健康": "fa-heartbeat",
                "學習": "fa-school"
            };
            if (this.todo.category in iconMap) {
                icon = iconMap[this.todo.category];
            }
            // if (this.todo.category == "財務") {
            //     icon = "fa-wallet";
            // }
            // else if (this.todo.category == "健康") {
            //     icon = "fa-heartbeat";
            // }
            // else
            //     icon = "fa-school";
            return icon;
        }
    },
    methods: {
        btnClick() {
            //通知上一層移除按鈕被點擊了
            this.$emit("onRemoveClick");
        }
    }
}
</script>