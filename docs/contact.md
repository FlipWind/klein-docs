<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/flipwind.png',
    name: 'FlipWind',
    title: '维护',
    links: [
      { icon: 'github', link: 'https://github.com/flipwind' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/524982829' }
    ]
  },
  {
    avatar: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    name: 'You',
    title: '参与',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/' }
    ]
  }
]
</script>


# 参与讨论
### 激烈的讨论

企鹅交流群：[1033840020](https://qm.qq.com/q/MMAjho9R0e)

### 团队
<VPTeamMembers size="small" :members="members" />

### 联系方式
将在五天内回复。（上学）  

邮件：flipwind.t@gmail.com  
QQ：请通过企鹅群直接私信我