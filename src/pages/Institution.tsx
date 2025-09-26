import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Target,
  BookOpen,
  Brain,
  Scale,
  Award,
  Download,
  Filter,
  Calendar
} from "lucide-react";

const Institution = () => {
  const cohortStats = [
    { metric: "Total Students", value: "247", change: "+12", icon: Users },
    { metric: "Active This Week", value: "189", change: "+8%", icon: TrendingUp },
    { metric: "Average Score", value: "76%", change: "+3%", icon: Target },
    { metric: "Completion Rate", value: "84%", change: "+5%", icon: CheckCircle2 },
  ];

  const skillDistribution = [
    { skill: "Knowledge & Recall", average: 78, struggling: 23, excelling: 45 },
    { skill: "Factual Analysis", average: 72, struggling: 34, excelling: 31 },
    { skill: "Doctrinal Analysis", average: 81, struggling: 19, excelling: 52 },
    { skill: "Critical Evaluation", average: 69, struggling: 41, excelling: 28 },
  ];

  const riskStudents = [
    { 
      name: "Emma Thompson", 
      id: "ET2024", 
      riskLevel: "High",
      issues: ["Low engagement", "Struggling with critical evaluation"],
      lastActive: "3 days ago",
      avgScore: 58
    },
    { 
      name: "James Wilson", 
      id: "JW2024", 
      riskLevel: "Medium",
      issues: ["Inconsistent performance", "Missed 2 sessions"],
      lastActive: "1 day ago",
      avgScore: 65
    },
    { 
      name: "Sophie Chen", 
      id: "SC2024", 
      riskLevel: "Medium",
      issues: ["Difficulty with doctrinal analysis"],
      lastActive: "Today",
      avgScore: 68
    },
  ];

  const topPerformers = [
    { name: "Alex Rodriguez", id: "AR2024", avgScore: 94, streak: 28, sessionsCompleted: 156 },
    { name: "Maya Patel", id: "MP2024", avgScore: 91, streak: 22, sessionsCompleted: 143 },
    { name: "Oliver Smith", id: "OS2024", avgScore: 89, streak: 19, sessionsCompleted: 138 },
  ];

  const engagementData = [
    { week: "Week 1", sessions: 342, avgDuration: "45 min" },
    { week: "Week 2", sessions: 389, avgDuration: "48 min" },
    { week: "Week 3", sessions: 421, avgDuration: "52 min" },
    { week: "Week 4", sessions: 456, avgDuration: "50 min" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Institution Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor student progress and identify support opportunities
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter Cohorts
          </Button>
          <Button variant="elegant">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cohortStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.metric}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="atrisk">At-Risk Students</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Skill Distribution */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Skill Development Overview
                </CardTitle>
                <CardDescription>
                  Class performance across core competencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillDistribution.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">{skill.average}% avg</span>
                    </div>
                    <Progress value={skill.average} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center text-destructive">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {skill.struggling} struggling
                      </span>
                      <span className="flex items-center text-success">
                        <Award className="h-3 w-3 mr-1" />
                        {skill.excelling} excelling
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Weekly Engagement Trends
                </CardTitle>
                <CardDescription>
                  Student activity over the past month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {engagementData.map((week, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">{week.week}</div>
                      <div className="text-sm text-muted-foreground">
                        Avg duration: {week.avgDuration}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{week.sessions}</div>
                      <div className="text-sm text-muted-foreground">sessions</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Top Performing Students
              </CardTitle>
              <CardDescription>
                Students excelling in legal reasoning development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        #{index + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.id}</div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="font-semibold text-lg">{student.avgScore}%</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        {student.streak} day streak
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atrisk" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                Students Requiring Support
              </CardTitle>
              <CardDescription>
                Early intervention opportunities for struggling learners
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskStudents.map((student, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{student.name}</div>
                      <div className="text-sm text-muted-foreground">{student.id}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={student.riskLevel === "High" ? "destructive" : "secondary"}
                      >
                        {student.riskLevel} Risk
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {student.avgScore}% avg
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Identified Issues:</div>
                    <ul className="space-y-1">
                      {student.issues.map((issue, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-2 text-destructive" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      Last active: {student.lastActive}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="default" size="sm">
                        Schedule Support
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Daily Usage Patterns
                </CardTitle>
                <CardDescription>
                  When students are most active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-8 border border-border rounded-lg">
                    <div className="text-3xl font-bold mb-2">10:30 AM</div>
                    <div className="text-muted-foreground">Peak usage time</div>
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    Most students engage between 9 AM - 12 PM and 2 PM - 5 PM
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  Session Quality Metrics
                </CardTitle>
                <CardDescription>
                  Learning effectiveness indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Average session duration</span>
                    <span className="font-semibold">48 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Completion rate</span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Re-engagement within 24h</span>
                    <span className="font-semibold">67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average improvement per session</span>
                    <span className="font-semibold">+3.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Institution;